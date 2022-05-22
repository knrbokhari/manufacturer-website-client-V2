import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="mt-14">
            <div className="footer p-10  bg-base-200 text-base-content">
                <div>
                    <span class="footer-title">Services</span>
                    <Link to='' class="link link-hover">Branding</Link>
                    <Link to='' class="link link-hover">Design</Link>
                    <Link to='' class="link link-hover">Marketing</Link>
                    <Link to='' class="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <Link to='' class="link link-hover">About us</Link>
                    <Link to='' class="link link-hover">Contact</Link>
                    <Link to='' class="link link-hover">Jobs</Link>
                    <Link to='' class="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <Link to='' class="link link-hover">Terms of use</Link>
                    <Link to='' class="link link-hover">Privacy policy</Link>
                    <Link to='' class="link link-hover">Cookie policy</Link>
                </div>
                <div>
                    <span class="footer-title">Newsletter</span>
                    <div class="form-control w-80">
                        <label class="label">
                            <span class="label-text">Enter your email address</span>
                        </label>
                        <div class="relative">
                            <input type="text" placeholder="username@site.com" class="input input-bordered w-full pr-16" />
                            <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer footer-center p-4 bg-base-300 text-base-content'>
                <p>Copyright © 2022 - All right reserved by KNR</p>
            </div>
        </footer>
    );
};

export default Footer;