import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="">
            <div className="flex gap-10 flex-wrap justify-center ms:gap-0 sm:justify-evenly sm:footer  p-10 bg-base-200 text-base-content">
                <div className='flex flex-col'>
                    <span className="footer-title">Services</span>
                    <Link to='' className="link link-hover">Branding</Link>
                    <Link to='' className="link link-hover">Design</Link>
                    <Link to='' className="link link-hover">Marketing</Link>
                    <Link to='' className="link link-hover">Advertisement</Link>
                </div>
                <div className='flex flex-col'>
                    <span className="footer-title">Company</span>
                    <Link to='' className="link link-hover">About us</Link>
                    <Link to='' className="link link-hover">Contact</Link>
                    <Link to='' className="link link-hover">Jobs</Link>
                    <Link to='' className="link link-hover">Press kit</Link>
                </div>
                <div className='flex flex-col'>
                    <span className="footer-title">Legal</span>
                    <Link to='' className="link link-hover">Terms of use</Link>
                    <Link to='' className="link link-hover">Privacy policy</Link>
                    <Link to='' className="link link-hover">Cookie policy</Link>
                </div>
                <div className='flex flex-col'>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-center p-4 bg-base-300 text-base-content'>
                <p>Copyright © 2022 - All right reserved by KNR</p>
            </div>
        </footer>
    );
};

export default Footer;