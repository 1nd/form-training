import React, { useState } from 'react';

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [gender, setGender] = useState("");

    const updateFullName = (event) => {
        setFullName(event.target.value)
    }

    const updateGender = event => {
        setGender(event.target.value)
    }

    const submit = (event) => {
        event.preventDefault();

        fetch('https://api.example.com/login', {method: 'POST', body: JSON.stringify({name: fullName, gender: gender})})
    }

    return (
        <React.Fragment>
            <h1>Radio (Controlled)</h1>
            <form onSubmit={submit}>
                <label>
                    Full Name:
                    <input type="text" value={fullName} onChange={updateFullName} />
                </label>
                Gender:
                <label><input type="radio" checked={gender==="female"} value="female" onChange={updateGender} />Female</label>
                <label><input type="radio" checked={gender==="male"} value="male" onChange={updateGender} />Male</label>
                <button type="submit">Submit</button>
            </form>
        </React.Fragment>
    )
}

export default Register