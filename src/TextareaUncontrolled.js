import React, { useRef } from 'react';
import { get } from 'lodash';

const Register = () => {
    const nameField = useRef()
    const addressField = useRef()

    const submit = (event) => {
        event.preventDefault();

        const fullName = get(nameField, 'current.value');
        const address = get(addressField, 'current.value');
        fetch('https://api.example.com/login', {method: 'POST', body: JSON.stringify({name: fullName, address: address})})
    }

    return (
        <React.Fragment>
            <h1>Textarea (Uncontrolled)</h1>
            <form onSubmit={submit}>
                <label>
                    Full Name:
                    <input type="text" ref={nameField} />
                </label>
                <label>
                    Address:
                    <textarea ref={addressField}></textarea>
                </label>
                <button type="submit">Submit</button>
            </form>
        </React.Fragment>
    )
}

export default Register