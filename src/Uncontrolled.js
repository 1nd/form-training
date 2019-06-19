import React, { useRef } from 'react';
import { get } from 'lodash';

const Register = () => {
    const nameField = useRef();

    const submit = (event) => {
        event.preventDefault();
        const fullName = get(nameField, 'current.value');
        fetch('https://api.example.com/login', {method: 'POST', body: JSON.stringify({name: fullName})})
    }

    return (
        <React.Fragment>
            <h1>Register (Uncontrolled)</h1>
            <form onSubmit={submit}>
                <label>
                    Full Name:
                    <input type="text" ref={nameField} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </React.Fragment>
    )
}

export default Register