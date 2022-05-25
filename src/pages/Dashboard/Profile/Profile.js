import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import useUpdateProfile from '../../../hooks/useUpdateProfile';

const Profile = () => {
    const [user] = useAuthState(auth)
    const [updateProfile] = useUpdateProfile(user)

    const { photo, phone, name, location, gender, email, education, LinkedIn } = updateProfile

    return (
        <div className='container mx-auto'>
            <h2 className='my-10 text-center text-3xl'>Profile</h2>

            <div class="card max-w-3xl mx-auto shadow-xl">
                <div class="card-body">
                    <div className=" md:flex">
                        <div className="w-60 md:w-32">
                            <img src={photo} alt="" />
                        </div>
                        <div className=" md:ml-10">
                            <h2>Name: {name}</h2>
                            <p>Email: {email}</p>
                            <p>Location: {location ? location : ''}</p>
                            <p>Education: {education ? education : ''}</p>
                            <p>Gender: {gender ? gender : ''}</p>
                            <p>Phone: {phone ? phone : ''}</p>
                            <p>LinkedIn: {LinkedIn ? LinkedIn : ''}</p>
                        </div>
                    </div>

                    <Link to="/dashboard/updateprofile" className='btn mt-4 btn-primary'>update profile</Link>

                </div>
            </div>
        </div>
    );
};

export default Profile;