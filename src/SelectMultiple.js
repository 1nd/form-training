import React, { useState } from 'react';

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [country, setCountry] = useState([]);

    const updateFullName = (event) => {
        setFullName(event.target.value)
    }

    const updateCountry = (event) => {
        const selectedCountries = event.target.selectedOptions;
        let newCountry = [];
        for (let aCountry of selectedCountries) {
            newCountry.push(aCountry.value);
        }
        setCountry(newCountry);
    }

    const submit = (event) => {
        event.preventDefault();

        fetch('https://api.example.com/login', {method: 'POST', body: JSON.stringify({name: fullName, country: country})})
    }

    return (
        <React.Fragment>
            <h1>Select - Multiple (Controlled)</h1>
            <form onSubmit={submit}>
                <label>
                    Full Name:
                    <input type="text" value={fullName} onChange={updateFullName} />
                </label>
                <label>
                    Country:
                    <select multiple value={country} onChange={updateCountry}>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
                <button type="submit">Submit</button>
            </form>
        </React.Fragment>
    )
}

export default Register