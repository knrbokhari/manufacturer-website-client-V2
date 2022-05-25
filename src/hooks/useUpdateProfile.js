import { useEffect, useState } from 'react';

const useUpdateProfile = (user) => {
    const [updateProfile, setUpdateProfile] = useState([]);
    useEffect(() => {
        const fetchProduct = async () => {
            const rsc = await fetch(`http://localhost:5000/user/${user.email}`, {
                headers: {
                    authorization: `Berer ${localStorage.getItem(`accessToken`)}`,
                },
            });
            const data = await rsc.json();
            setUpdateProfile(data);
        };

        fetchProduct();
    }, [user]);
    return [updateProfile];
};

export default useUpdateProfile;