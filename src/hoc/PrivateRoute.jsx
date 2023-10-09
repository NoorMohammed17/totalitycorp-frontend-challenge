import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const isAuth = useSelector((store) => store.authReducer.isAuthenticated);
    const location = useLocation();
    //console.log(location);
    return isAuth ? children : <Navigate to={'/login'} state={location.pathname} replace /> //by default replace will be true
}

export default PrivateRoute;