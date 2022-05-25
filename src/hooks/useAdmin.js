import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import auth from "../firebase.init";
import { useNavigate } from "react-router-dom";



const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    const navigate = useNavigate()
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://warm-brook-08565.herokuapp.com/admin/${email}`, {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                    authorization: `Berer ${localStorage.getItem(`accessToken`)}`,
                },
            })
                .then((res) => {
                    if (res.status === 401 || res.status === 403) {
                        navigate("/login");
                        signOut(auth);
                        localStorage.removeItem("accessToken");
                    }
                    return res.json();
                })
                .then((data) => {
                    setAdmin(data.admin);
                    setAdminLoading(false);
                });
        }
    }, [user, navigate]);
    return [admin, adminLoading];
};

export default useAdmin;
