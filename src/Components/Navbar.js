import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setLoggedIn } from '../Store/LoggedInSlice'

function Navbar() {
    const Dispatch = useDispatch();
    const Navigate = useNavigate();
    function signOut() {
        if (localStorage.getItem('usertoken')) {
            localStorage.removeItem('usertoken');
            Dispatch(setLoggedIn(false));
        }
        Navigate('/login');
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link className="navbar-brand" to="/">Authentify</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" > Home <span className="sr-only">(current)</span></Link>
                        </li>
                    </ul>
                    <button onClick={signOut} className="btn btn-danger">Log out</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar
