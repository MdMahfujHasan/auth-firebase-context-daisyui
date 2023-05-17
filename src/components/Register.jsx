import React, { useContext, useState } from 'react';
import { UserContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { createUser } = useContext(UserContext);
    const eyeIcon = <EyeIcon className="h-6 w-6" />
    const eyeSlashIcon = <EyeSlashIcon className="h-6 w-6" />

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                form.reset();
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }
    return (
        <div className="min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-xl font-bold">Register</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? "text" : "password"} name='password' placeholder="Your Password" className="input input-bordered" required />
                            <button onClick={handleShowPassword} className='absolute right-2.5 bottom-2.5'>{showPassword ? eyeIcon : eyeSlashIcon}</button>
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn btn-accent">Register</button>
                        </div>
                    </form>
                    <small className='ml-10 mb-4'>Already have an account? <Link className='text-blue-500 hover:underline' to="/login">Login</Link></small>
                </div>
            </div>
        </div>
    );
};

export default Register;