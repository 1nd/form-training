import React, { useState } from 'react';

const Register = () => {
    const [fullName, setFullName] = useState('');

    const updateFullName = (event) => {
        setFullName(event.target.value)
    }

    const submit = (event) => {
        event.preventDefault();

        fetch('https://api.example.com/register', {method: 'POST', body: JSON.stringify({name: fullName})})
    }

    return (
        <React.Fragment>
            <h1>{`Register (No <form>)`}</h1>
            <label>
                Full Name:
                <input type="text" value={fullName} onChange={updateFullName} />
            </label>
            <button type="submit" onClick={submit}>Submit</button>
        </React.Fragment>
    )
}

export default Register