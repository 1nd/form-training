import React, { useState } from 'react';

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');

    const updateFullName = (event) => {
        setFullName(event.target.value)
    }

    const updateAddress = (event) => {
        setAddress(event.target.value)
    }

    const submit = (event) => {
        event.preventDefault();

        fetch('https://api.example.com/register', {method: 'POST', body: JSON.stringify({name: fullName, address: address})})
    }

    return (
        <React.Fragment>
            <h1>Textarea (Controlled)</h1>
            <form onSubmit={submit}>
                <label>
                    Full Name:
                    <input type="text" value={fullName} onChange={updateFullName} />
                </label>
                <label>
                    Address (value):
                    <textarea value={address} onChange={updateAddress} />
                </label>
                <label>
                    Address (children):
                    <textarea onChange={updateAddress}>{address}</textarea>
                </label>
                <button type="submit">Submit</button>
            </form>
        </React.Fragment>
    )
}

export default Register