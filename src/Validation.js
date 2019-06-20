import React, { useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import { css } from 'emotion';

const errorStyle = css`
    color: red;
`

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [fullNameError, setFullNameError] = useState('');
    const [emailError, setEmailError] = useState('');

    const updateFullName = (event) => {
        setFullName(event.target.value)
    }

    const updateEmail = (event) => {
        setEmail(event.target.value)
    }

    const validateFullName = () => {
        if (!fullName) {
            return 'Name cannot be empty'
        }

        return '';
    }

    const validateEmail = () => {
        if (!email) {
            return 'Email cannot be empty'
        }

        if (!isEmail(email)) {
            return 'Invalid email format'
        }

        return '';
    }

    const validate = () => {
        const fullNameError = validateFullName();
        setFullNameError(fullNameError);

        const emailError = validateEmail();
        setEmailError(emailError);

        return !fullNameError && !emailError;
    }

    const submit = (event) => {
        event.preventDefault();

        const isValid = validate();
        
        if (isValid) {
            fetch('https://api.example.com/login', {method: 'POST', body: JSON.stringify({name: fullName, email: email})})
        }
    }

    return (
        <React.Fragment>
            <h1>Register with Validation</h1>
            <form noValidate onSubmit={submit}>
                <label>
                    Full Name:
                    <input type="text" value={fullName} onChange={updateFullName} />
                </label>
                {fullNameError && <div className={errorStyle}>{fullNameError}</div>}
                <label>
                    Email:
                    <input type="email" value={email} onChange={updateEmail} />
                </label>
                {emailError && <div className={errorStyle}>{emailError}</div>}
                <button type="submit">Submit</button>
            </form>
        </React.Fragment>
    )
}

export default Register