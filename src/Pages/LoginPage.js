import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoggedIn } from '../Store/LoggedInSlice';
import Loader from '../Components/Loader';
import './loginPage.css';

function LoginPage() {
    const Dispatch = useDispatch();
    const Navigate = useNavigate();
    const [rememberMe, setRememberMe] = useState(false);
    const [load, setLoad] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const { register, formState: { errors }, handleSubmit, trigger, reset } = useForm();

    document.title = 'Login Page - Authentify';

    useEffect(() => {
        checkData();
    }, [checkData]);

    function checkData() {
        if (localStorage.getItem('usertoken')) {
            Dispatch(setLoggedIn(true));
            Navigate("/");
        }
    };

    function handleFormSubmit(data) {
        setLoad(true);
        axios({
            method: 'post',
            baseURL: 'https://reqres.in/api/login',
            data: data
        }).then(res => {
            if (res.status === 200) {
                if (rememberMe)
                    localStorage.setItem('usertoken', res.data.token);
            };
            setRememberMe(false);
            Dispatch(setLoggedIn(true));
            Navigate('/');
        }).catch(err => {
            setShowModal(true);
        }).finally(() => {
            setLoad(false);
            reset();
        })
    }

    const validation = {
        email: {
            required: 'Email is Required',
            pattern: {
                value: /^[a-zA-Z0-9+_.]+@[a-zA-Z0-9.-]+$/,
                message: 'Enter valid Email'
            }
        },
        password: {
            required: 'Password is Required',
            pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message: 'Password should contain 8 digits, 1 special character and alphanumeric.'
            }
        }
    }

    return (
        <>
            {load && <Loader />}
            <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="container p-3 m-2 bg-light" style={{ maxWidth: "400px" }}>
                    <h1 className="text-center">Login Form</h1>
                    <form onSubmit={handleSubmit(handleFormSubmit)}>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className={`form-control ${errors.email && 'is-invalid'}`} id="email" {...register('email', validation.email)} onKeyUp={() => trigger('email')} />
                            {errors.email && <small className="text-danger">{errors.email.message}</small>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className={`form-control ${errors.password && 'is-invalid'}`} id="password" {...register('password', validation.password)} onKeyUp={() => trigger('password')} />
                            {errors.password && <small className="text-danger">{errors.password.message}</small>}
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="rememberMe" onChange={() => { setRememberMe(!rememberMe) }} />
                            <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                </div>
            </div>
            {showModal &&
                <div id="myModal" class="cus-modal">
                    <div class="cus-modal-content">
                        <div className="cus-modal-header">
                        <p>Error Occured</p>
                        <span onClick={()=>setShowModal(false)} class="close">&times;</span>
                        </div>
                        <p className='cus-modal-value'>User Not Found</p>
                    </div>
                </div>
            }
        </>
    )
}

export default LoginPage