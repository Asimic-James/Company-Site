import React, { useState, useEffect } from 'react'
import PageBanner from './PageBanner';


export default function ContactUs() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        password: '',
        confirmPassword: '',
    });

    useEffect(() => {
        // Load saved form data from localStorage
        const savedData = localStorage.getItem('formData');
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);

    useEffect(() => {
        // Save form data to localStorage
        localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);

    // Handle form input changes
    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData((formData) => ({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const { firstName, lastName, email, address, city, state, zip, password, confirmPassword, gridCheck } = formData;
        const errors = [];

        if (password.length < 8) errors.push('Password must be at least 8 characters long');
        if (password !== confirmPassword) errors.push("Passwords do not match");
        if (!firstName.trim()) errors.push('Please enter your first name');
        if (!lastName.trim()) errors.push('Please enter your last name');
        if (!email.trim()) errors.push('Please enter your email address');
        if (!address.trim()) errors.push('Please enter your address');
        if (!city.trim()) errors.push('Please enter your city');
        if (!state.trim()) errors.push('Please select your state');
        if (!zip.trim()) errors.push('Please enter your zip code');
        if (!password.trim()) errors.push('Please enter your password');
        if (!confirmPassword.trim()) errors.push('Please confirm your password');
        // if (!gridCheck) errors.push('Please agree to the terms and conditions');

        if (errors.length) {
            alert(errors.join('\n'));
            return;
        } else {
            alert('Form submission successful:', formData);
        }
    };

   
    const states =  [
        {key: '', value: 'Select State'},
        {key: 'AB', value: 'Abia'},
        {key: 'AK', value: 'Akwa Ibom'},
        {key: 'AN', value: 'Anambra'},
        {key: 'BC', value: 'Bauchi'},
        {key: 'BY', value: 'Bayelsa'},
        {key: 'BE', value: 'Benue'},
        {key: 'CR', value: 'Cross River'},
        {key: 'DE', value: 'Delta'},
        {key: 'EB', value: 'Ebonyi'},
        {key: 'ED', value: 'Edo'},
        {key: 'EN', value: 'Enugu'},
        {key: 'GO', value: 'Gombe'},
        {key: 'IM', value: 'Imo'},
        {key: 'JI', value: 'Jigawa'},
        {key: 'KD', value: 'Kaduna'},
        {key: 'KT', value: 'Kano'},
        {key: 'KN', value: 'Katsina'},
        {key: 'KE', value: 'Kebbi'},
        {key: 'KO', value: 'Kogi'},
        {key: 'KW', value: 'Kwara'},
        {key: 'LA', value: 'Lagos'},
        {key: 'NA', value: 'Nasarawa'},
        {key: 'NI', value: 'Niger'},
        {key: 'OG', value: 'Ogun'},
        {key: 'ON', value: 'Ondo'},
        {key: 'OS', value: 'Osun'},
        {key: 'OY', value: 'Oyo'},
        {key: 'PL', value: 'Plateau'},
        {key: 'RI', value: 'Rivers'},
        {key: 'SO', value: 'Sokoto'},
        {key: 'TA', value: 'Taraba'},
        {key: 'YO', value: 'Yobe'},
        {key: 'ZA', value: 'Zamfara'},
        {key: 'FC', value: 'Abuja'}
    ];

    const formFields = [
        { label: 'First Name', id: 'firstName', name: 'firstName', type: 'text', placeholder: 'Enter your first name', required: true },
        { label: 'Last Name', id: 'lastName', name: 'lastName', type: 'text', placeholder: 'Enter your last name', required: true },
        { label: 'Email', id: 'email', name: 'email', type: 'email', placeholder: 'Enter your email address', required: true },
        { label: 'Address', id: 'address', name: 'address', type: 'text', placeholder: 'Enter your address', required: true },
        { label: 'City', id: 'city', name: 'city', type: 'text', placeholder: 'Enter your city', required: true },
        { label: 'Zip Code', id: 'zip', name: 'zip', type: 'text', placeholder: 'Enter your zip code', required: true },
        { label: 'Password', id: 'password', name: 'password', type: 'password', placeholder: 'Enter your password', required: true },
        { label: 'Confirm Password', id: 'confirmPassword', name: 'confirmPassword', type: 'password', placeholder: 'Confirm your password', required: true },
        // { label: 'I agree to the terms and conditions', id: 'gridCheck', name: 'gridCheck', type: 'checkbox', required: true },
    ];

    return (
        <>
        <PageBanner title="Contact Us" />
        <form onSubmit={handleSubmit} className='font-roboto fs-5 w-50 mx-auto mt-5 p-5 bg-light rounded shadow mb-5'>
            <h1 className='text-center mb-2 font-roboto fw-bold'>Let's Connect!</h1>
            <hr className='' />
            {formFields.map(({ label, id, name, type = 'text', placeholder, required }) => (
                <div className="mb-3" key={id}>
                    <label htmlFor={id} className="form-label my-2 fw-bold">{label}</label>
                    <input type={type} className="form-control shadow mb-3" id={id} name={name} placeholder={placeholder} value={formData[name]} onChange={handleInputChange} required={required} />
                </div>
            ))}
            <div className="mb-3">
                <label htmlFor="stateInput" className="form-label fw-bold">State</label>
                <select id="stateInput" className="form-select shadow mb-3" name="state" value={formData.state} onChange={handleInputChange} required>
                    {states.map(({ key, value }) => (
                        <option key={key} value={key}>{value}</option> 
                    ))}
                </select>
            </div>
            <button onClick={handleSubmit} type="submit" className="btn btn-primary w-100 mb-3 my-4 shadow fw-bold">Submit</button>
        </form>
        
        <div className="card bg-dark text-white mb-3 mt-5 mx-auto p-5 w-50">
            <div className="card-header text-center fs-5 mb-5">
             <p>Simplify, amplify...Code to the future.</p> 
            </div>
            <div className="card-body text-center mb-5 font-roboto">
                <blockquote className="blockquote mb-0">
                  <p>"The future belongs to those who believe in the beauty of their dreams."</p>
                  <div className="blockquote-footer">Someone famous in <cite title="Asimic Technologies">- Ralph Waldo Emerson</cite></div>
                </blockquote>
            </div>
        </div>
        </>
    );
}

