import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css'; 

const Login = () => {
    const [values, setValues] = useState({ username: '', password: '' });
    const [error, setError] = useState(null);
    const [isChecked, setIsChecked] = useState(false); // State for checkbox
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!isChecked) {
            toast.error('You must agree to the terms and conditions'); // Show error toast if checkbox is not checked
            return;
        }

        axios.post('http://localhost:5000/api/auth/login', values)
            .then(result => {
                if (result.data.loginStatus) {
                    localStorage.setItem("token", result.data.token); // Store JWT token
                    toast.success("Login successful");
                    navigate('/dashboard');  // Redirect to dashboard on successful login
                } else {
                    setError(result.data.error);  // Display error message if login fails
                    toast.error(result.data.error);  // Show error toast
                }
            })
            .catch(err => {
                console.log(err);
                setError('Please input correct credentials');
                toast.error('Invalid credentials');  // Show error toast
            });
    }

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
            <div className='p-3 rounded w-25 border loginForm'>
                <h2>Admin Login Page</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="username"><strong>Username:</strong></label>
                        <input
                            type="text"
                            name='username'
                            autoComplete='off'
                            placeholder='Enter username'
                            value={values.username}  // Bind input value to state
                            onChange={(e) => setValues({ ...values, username: e.target.value })}  // Update state on input change
                            className='form-control rounded-0'
                            required
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password:</strong></label>
                        <input
                            type="password"
                            name='password'
                            placeholder='Enter Password'
                            value={values.password}  // Bind input value to state
                            onChange={(e) => setValues({ ...values, password: e.target.value })}  // Update state on input change
                            className='form-control rounded-0'
                            required
                        />
                    </div>
                    <div className='mb-1'>
                        <input
                            type="checkbox"
                            id="agree"
                            checked={isChecked}  // Bind checkbox value to state
                            onChange={() => setIsChecked(!isChecked)}  // Update state on checkbox change
                            className='me-2'
                        />
                        <label htmlFor="agree">I agree to the terms and conditions</label>
                    </div>
                    <button className='btn btn-success w-100 rounded-0 mb-2'>Log in</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
