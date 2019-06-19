import React, { useState } from 'react';

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [readTnc, setReadTnc] = useState(false);

    const updateFullName = (event) => {
        setFullName(event.target.value)
    }

    const updateReadTnc = (event) => {
        setReadTnc(event.target.checked);
    }

    const submit = (event) => {
        event.preventDefault();

        fetch('https://api.example.com/login', {method: 'POST', body: JSON.stringify({name: fullName, readTnc: readTnc})})
    }

    return (
        <React.Fragment>
            <h1>Checkbox (Controlled)</h1>
            <form onSubmit={submit}>
                <label>
                    Full Name:
                    <input type="text" value={fullName} onChange={updateFullName} />
                </label>
                <label>
                    <input type="checkbox" checked={readTnc} onChange={updateReadTnc} />
                    I have read the Terms & Conditions and disagree with them.
                </label>
                <button type="submit">Submit</button>
            </form>
        </React.Fragment>
    )
}

export default Register