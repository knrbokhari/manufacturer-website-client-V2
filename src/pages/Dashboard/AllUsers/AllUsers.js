import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';

const AllUsers = () => {
    const {
        data: users,
        refetch,
        isLoading,
    } = useQuery("users", () =>
        fetch(`https://warm-brook-08565.herokuapp.com/user`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );
    if (isLoading) {
        return <Loading></Loading>;
    }

    const handleAdmin = (email) => {
        fetch(`https://warm-brook-08565.herokuapp.com/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => {
                if (res.status === 403) {
                    alert("Failed to Make an admin");
                }
                return res.json();
            })
            .then((data) => {
                if (data.modifiedCount > 0) {
                    alert("Successfully made an admin.");
                    refetch();
                }
            });
    }

    return (
        <div className='container'>
            <h2 className='my-10 text-center text-3xl'>All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Make admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            users.map((user, index) => (
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role ? user.role : 'Client'}</td>
                                    <th>{user.role ? '' : <buttonc className="btn btn-primary btn-sm" onClick={() => handleAdmin(user.email)}>Make admin</buttonc>}</th>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;