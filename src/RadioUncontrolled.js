import React, { useRef } from 'react';
import { get } from 'lodash'

const Register = () => {
    const nameField = useRef();
    const genderFieldFemale = useRef();
    const genderFieldMale = useRef();

    const submit = (event) => {
        event.preventDefault();
        
        const fullName = get(nameField, 'current.value');

        const isFemale = get(genderFieldFemale, 'current.checked');
        const isMale = get(genderFieldMale, 'current.checked');
        let selectedGender;
        if (isFemale) {
            selectedGender = 'female';
        } else if (isMale) {
            selectedGender = 'male';
        } else {
            selectedGender = '';
        }

        fetch('https://api.example.com/register', {method: 'POST', body: JSON.stringify({name: fullName, gender: selectedGender})})
    }

    return (
        <React.Fragment>
            <h1>Radio (Uncontrolled)</h1>
            <form onSubmit={submit}>
                <label>
                    Full Name:
                    <input type="text" ref={nameField} />
                </label>
                Gender:
                <label><input type="radio" ref={genderFieldFemale} name="gender" value="female" />Female</label>
                <label><input type="radio" ref={genderFieldMale} name="gender" value="male" />Male</label>
                <button type="submit">Submit</button>
            </form>
        </React.Fragment>
    )
}

export default Register