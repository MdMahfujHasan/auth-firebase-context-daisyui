import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../providers/AuthProvider';

const Login = () => {

    const { signIn, googleSignIn } = useContext(UserContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                form.reset();
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-xl font-bold">Login</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn btn-accent">Login</button>
                        </div>
                    </form>
                    <div className="form-control">
                        <button onClick={handleGoogleSignIn} className="btn btn-primary">Sign in with Google</button>
                    </div>
                    <small className='ml-10 mt-2 mb-4'>New user? <Link className='text-blue-500 hover:underline' to="/register">Register</Link></small>
                </div>
            </div>
        </div>
    );
};

export default Login;