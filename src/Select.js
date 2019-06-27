import React, { useState } from 'react';

const COUNTRIES = [
    "Indonesia", "Malaysia", "Singapore", "Other",
]

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [country, setCountry] = useState('');

    const updateFullName = (event) => {
        setFullName(event.target.value)
    }

    const updateCountry = (event) => {
        setCountry(event.target.value)
    }

    const submit = (event) => {
        event.preventDefault();

        fetch('https://api.example.com/register', {method: 'POST', body: JSON.stringify({name: fullName, country: country})})
    }

    return (
        <React.Fragment>
            <h1>Select (Controlled)</h1>
            <form onSubmit={submit}>
                <label>
                    Full Name:
                    <input type="text" value={fullName} onChange={updateFullName} />
                </label>
                <label>
                    Country (Hardcoded):
                    <select value={country} onChange={updateCountry}>
                        <option value="">Please choose one</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
                <label>
                    Country (From Datasource):
                    <select value={country} onChange={updateCountry}>
                        <option value="">Please choose one</option>
                        {COUNTRIES.map(aCountry => {
                            return <option value={aCountry} key={aCountry}>{aCountry}</option>
                        })}
                    </select>
                </label>
                <button type="submit">Submit</button>
            </form>
        </React.Fragment>
    )
}

export default Register