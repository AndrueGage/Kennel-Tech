import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { MUTATION_LOGIN } from '../utils/mutations';
import auth from '../utils/auth';
export default function LoginPage() {

    const [login, { loading, error }] = useMutation(MUTATION_LOGIN)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        try {
            const { data } = await login({ variables: { email: formData.get('email'), password: formData.get('password') } })
            console.log(data.login);
            auth.login(data.login.token)
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
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                />
            </label>
            <br />
            <label>
                Password:
                <input
                    type="password"
                    name="password"
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}