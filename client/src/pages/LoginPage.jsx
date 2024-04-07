import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { QUERY_LOGIN } from '../utils/queries';
export default function LoginPage() {


    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        console.log(formData);
    };

    const handleSubmit =  (e) => {
        e.preventDefault();
        try {
            const { data } =  useQuery(QUERY_LOGIN, {
                variables: { email: formData.email, password: formData.password }
            });
            console.log('Form submitted:', data);
        } catch(err) {
            console.error('doesnt work', err)
        }
       
        
        
        // You can add code here to send the form data to the server or perform other actions
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Password:
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}