import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { MUTATION_SIGNUP } from '../utils/mutations';
import auth from '../utils/auth';
import Logo from '../assets/kennel-logo.png'
import { Link } from 'react-router-dom';

export default function LoginPage() {

    const [signup, { loading, error }] = useMutation(MUTATION_SIGNUP)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        try {
            const { data } = await signup({ variables: 
                { 
                    email: formData.get('email'), 
                    password: formData.get('password'),
                    firstName: formData.get('firstName'),
                    lastName: formData.get('lastName'),
                } 
            });
            console.log(data.login);
            auth.signup()
        } catch (e) {
            console.error(e);
        }
    };
    if (loading) {
        return (<p>loading...</p>)
    }
    if (error) {
        return (<pre>{JSON.stringify(error, null, 3)}</pre>)
    }
    return (
        <div className="bg-[#8cc084] h-screen w-full flex flex-col justify-center items-center p-12">
            <div className="p-12 mt-12 bg-[#c1d7ae] rounded-2xl max-w-[750px] w-full">

                <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-5">
                <img src={Logo} alt="Logo" className="rounded-full w-[163px] aspect-square bg-white" />
                    <h1 className="text-center text-3xl font-bold mb-12">Sign Up</h1>

                    <input className="border rounded-xl max-w-[280px] p-2 bg-neutral-200 placeholder:text-black font-bold text-center text-xl" type="email" id="email" name="email" placeholder="Email" required />

                    <input className="border rounded-xl max-w-[280px] p-2 bg-neutral-200 placeholder:text-black font-bold text-center text-xl" type="password" id="password" name="password" placeholder="Password" required />

                    <input className="border rounded-xl max-w-[280px] p-2 bg-neutral-200 placeholder:text-black font-bold text-center text-xl" type="text" id="firstName" name="firstName" placeholder="First Name" required />

                    <input className="border rounded-xl max-w-[280px] p-2 bg-neutral-200 placeholder:text-black font-bold text-center text-xl" type="text" id="lastName" name="lastName" placeholder="Last Name" required />

                    <div className="flex flex-col justify-between mt-10 items-center">
                        <button type="submit" className="rounded-xl p-3 bg-gradient-to-r from-[#8cc084] to-white text-black w-[250px] font-bold text-xl">Sign up</button>

                        <span >or</span>
                        <Link to="/login" className="rounded-xl p-3 bg-neutral-200 text-black w-[110px] font-bold text-xl text-center">Login</Link>
                    </div>

                </form>
            </div>
        </div>
    );
}