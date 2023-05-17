import React, { useContext } from 'react';
import { UserContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(UserContext);

    if (loading) {
        return <progress className="progress w-36"></progress>;
    }

    if (user) {
        return children;
    }
    return (
        <Navigate to="/login">Login</Navigate>
    );
};

export default PrivateRoute;