import React, { useState } from 'react';

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [profilePic, setProfilePic] = useState('');

    const updateFullName = (event) => {
        setFullName(event.target.value)
    }

    const updateProfilePic = event => {
        const file = event.target.files[0];
        const profilePicObjectUrl = window.URL.createObjectURL(file);
        setProfilePic(profilePicObjectUrl);
    }

    const submit = (event) => {
        event.preventDefault();

        fetch('https://api.example.com/login', {method: 'POST', body: JSON.stringify({name: fullName, profilePic: profilePic})})
    }

    return (
        <React.Fragment>
            <h1>File (Using state)</h1>
            <form onSubmit={submit}>
                <label>
                    Full Name:
                    <input type="text" value={fullName} onChange={updateFullName} />
                </label>
                <label>
                    Profile Picture:
                    <input type="file" onChange={updateProfilePic} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </React.Fragment>
    )
}

export default Register