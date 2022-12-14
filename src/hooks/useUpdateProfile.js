import { useEffect, useState } from "react";

const useUpdateProfile = (user) => {
  const [updateProfileHooks, setUpdateProfileHooks] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const rsc = await fetch(
        `https://blooming-fortress-19640.herokuapp.com/user/${user.email}`,
        {
          headers: {
            authorization: `Berer ${localStorage.getItem(`accessToken`)}`,
          },
        }
      );
      const data = await rsc.json();
      setUpdateProfileHooks(data);
    };
    fetchProduct();
  }, [user]);

  return [updateProfileHooks];
};

export default useUpdateProfile;
