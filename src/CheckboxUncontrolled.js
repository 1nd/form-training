import React, { useRef } from 'react';
import { get } from 'lodash'

const Register = () => {
    const nameField = useRef();
    const readTncField = useRef();

    const submit = (event) => {
        event.preventDefault();
        const fullName = get(nameField, 'current.value');
        const readTnc = get(readTncField, 'current.checked');
        fetch('https://api.example.com/login', {method: 'POST', body: JSON.stringify({name: fullName, readTnc: readTnc})})
    }

    return (
        <React.Fragment>
            <h1>Checkbox (Uncontrolled)</h1>
            <form onSubmit={submit}>
                <label>
                    Full Name:
                    <input type="text" ref={nameField} />
                </label>
                <label>
                    <input type="checkbox" ref={readTncField} />
                    I have read the Terms & Conditions and disagree with them.
                </label>
                <button type="submit">Submit</button>
            </form>
        </React.Fragment>
    )
}

export default Register