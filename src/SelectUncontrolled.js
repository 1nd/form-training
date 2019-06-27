import React, { useRef } from 'react';
import { get } from 'lodash';

const Register = () => {
    const nameField = useRef();
    const countryField = useRef();

    const submit = (event) => {
        event.preventDefault();
        const fullName = get(nameField, 'current.value');
        const country = get(countryField, 'current.value');
        fetch('https://api.example.com/register', {method: 'POST', body: JSON.stringify({name: fullName, country: country})})
    }

    return (
        <React.Fragment>
            <h1>Select (Uncontrolled)</h1>
            <form onSubmit={submit}>
                <label>
                    Full Name:
                    <input type="text" ref={nameField} />
                </label>
                <label>
                    Country:
                    <select ref={countryField}>
                        <option value="">Please choose one</option>
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