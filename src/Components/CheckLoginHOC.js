import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useHref } from 'react-router-dom';
import { setLoggedIn } from '../Store/LoggedInSlice';

function CheckLoginHOC(Component) {
    return function LoginAuthentication() {
        const loggedIn = useSelector((state) => state.loggedIn)
        const Dispatch = useDispatch();

        if (useHref() === '/login' && !loggedIn) {
            return <Component />;
        }

        if (localStorage.getItem('usertoken') || loggedIn) {
            Dispatch(setLoggedIn(true));
            return (<Component />);
        }
        if (!localStorage.getItem('usertoken') || !loggedIn) {
            return <Navigate to='/login' />;
        }
    }
}

export default CheckLoginHOC;
