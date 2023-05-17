import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../providers/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(UserContext);

    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="navbar bg-base-300">
            <Link className="btn btn-ghost normal-case text-md" to="/">Home</Link>
            {user && <Link className="btn btn-ghost normal-case text-md" to="/profile">Profile</Link>}
            {
                user ? <div>
                    <small>{user.email}</small>
                    <button onClick={handleSignOut} className="btn btn-xs btn-error ml-4">Sign out</button>
                </div> : <>
                    <Link className="btn btn-ghost normal-case text-md" to="/login">Login</Link>
                    <Link className="btn btn-ghost normal-case text-md" to="/register">Register</Link>
                </>
            }
        </div>
    );
};

export default Header;