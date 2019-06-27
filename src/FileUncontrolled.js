import React, { useRef } from 'react';
import { get } from 'lodash';

const Register = () => {
    const nameField = useRef();
    const profilePicField = useRef()

    const submit = (event) => {
        event.preventDefault();
        
        const fullName = get(nameField, 'current.value');
        const profilePicFile = get(profilePicField, 'current.files[0]');
        
        let profilePicObjectUrl
        if (profilePicFile) {
            profilePicObjectUrl = window.URL.createObjectURL(profilePicFile);
        } else {
            profilePicObjectUrl = ''
        }
        
        fetch('https://api.example.com/register', {method: 'POST', body: JSON.stringify({name: fullName, profilePic: profilePicObjectUrl})})
    }

    return (
        <React.Fragment>
            <h1>File (Uncontrolled)</h1>
            <form onSubmit={submit}>
                <label>
                    Full Name:
                    <input type="text" ref={nameField} />
                </label>
                <label>
                    Profile Picture:
                    <input type="file" ref={profilePicField} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </React.Fragment>
    )
}

export default Register