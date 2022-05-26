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
        <div className='container mx-auto mb-14'>
            <h2 className='my-10 text-center text-3xl'>Profile</h2>

            <div className="card border max-w-3xl mx-auto shadow-xl">
                <div className="card-body text-lg">
                    <div className=" md:flex">
                        <div className="w-60 md:w-32">
                            <img src={photo || 'https://i.ibb.co/TYCW2Fz/istockphoto-666545204-612x612-1.jpg'} alt="" />
                        </div>
                        <div className=" md:ml-10">
                            <h2><b className='w-24 inline-block'>Name</b> : {name || user.displayName}</h2>
                            <p><b className='w-24 inline-block'>Email</b> : {email}</p>
                            <p><b className='w-24 inline-block'>Location</b> : {location ? location : ''}</p>
                            <p><b className='w-24 inline-block'>Education</b> : {education ? education : ''}</p>
                            <p><b className='w-24 inline-block'>Gender</b> : {gender ? gender : ''}</p>
                            <p><b className='w-24 inline-block'>Phone</b> : {phone ? phone : ''}</p>
                            <p><b className='w-24 inline-block'>LinkedIn</b> : {LinkedIn ? LinkedIn : ''}</p>
                        </div>
                    </div>

                    <Link to="/dashboard/updateprofile" className='btn mt-4 btn-primary'>update profile</Link>

                </div>
            </div>
        </div>
    );
};

export default Profile;