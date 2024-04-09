import React from 'react';
import { useMutation } from '@apollo/client';
import auth from '../utils/auth';
import Container from '../components/Container';
import ClientNav from '../components/ClientNav';
import Logo from '../assets/kennel-logo.png';
import { QUERY_DOG_INFO } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { UPDATE_DOG_INFO } from '../utils/mutations';

export default function DogInfoPage(){
    const user = auth.getUser();
    if (user) {
        const { loading, data, error } = useQuery(QUERY_DOG_INFO, { variables: { id: user.data._id } });
        if (data) {
            data.getUsersDogInfo.dogs.findAll(dog => {
                let dogName = dog.name
                dog.reservations.forEach(reservation => {
                    const newReservation = { ...reservation, name: dogName }
                    reservationsArr.push(newReservation)
                })
            })
            const newData = []

    const [addDog, { loading, error }] = useMutation(UPDATE_DOG_INFO)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        try {
            const { data } = await addDog({ variables: 
                { 
                    name: formData.get('name'), 
                    breed: formData.get('breed'),
                    sex: formData.get('sex'),
                    age: formData.get('age'),
                    weight: formData.get('weight'),
                    vet: formData.get('vet')
                } 
            });
            console.log(data.login);
            auth.addDog()
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
        <div className='max-w-[1400px] mx-auto flex flex-col gap-8 my-5'>
        <ClientNav />
        <h1 className='text-xl'><strong>Dog Information</strong></h1>
        <Container>
            <p className="text-xl"><strong>My Dogs:</strong></p>
            <hr />
            <div className='doginfo-page'>
                <div className='doginfo-container'>
                    {/* USING LOGO AS IMAGE PLACEHOLDER FOR TESTING */}
                    <img src={Logo} alt="Logo" className="rounded-full w-[210px] h-[210px] aspect-square bg-white m-10" />
                    <div className='dog-params'>
                        {/* NEED TO ADD DOG DATA HERE */}[p;/ ]
                        <p className='text-2xl font-bold m-1'>Name: {}</p>
                        <p className='text-2xl font-bold m-1'>Breed: {}</p>
                        <p className='text-2xl font-bold m-1'>Sex: {}</p>
                        <p className='text-2xl font-bold m-1'>Age: {}</p>
                        <p className='text-2xl font-bold m-1'>Weight: {}</p>
                        <p className='text-2xl font-bold m-1'>Vet: {}</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-5 m-5">
                    <h1 className="text-left text-3xl font-bold mb-0">Add Dog:</h1>

                    <input className="border rounded-xl max-w-[250px] bg-neutral-200 placeholder:text-black font-bold text-center text-xl" type="name" id="name" name="name" placeholder="Name" required />

                    <input className="border rounded-xl max-w-[250px] bg-neutral-200 placeholder:text-black font-bold text-center text-xl" type="breed" id="breed" name="breed" placeholder="Breed" required />

                    <input className="border rounded-xl max-w-[250px] bg-neutral-200 placeholder:text-black font-bold text-center text-xl" type="sex" id="sex" name="sex" placeholder="Sex" required />

                    <input className="border rounded-xl max-w-[250px] bg-neutral-200 placeholder:text-black font-bold text-center text-xl" type="age" id="age" name="age" placeholder="Age" required />

                    <input className="border rounded-xl max-w-[250px] bg-neutral-200 placeholder:text-black font-bold text-center text-xl" type="weight" id="weight" name="weight" placeholder="Weight" required />

                    <input className="border rounded-xl max-w-[250px] bg-neutral-200 placeholder:text-black font-bold text-center text-xl" type="vet" id="vet" name="vet" placeholder="Vet" required />

                    <div className="flex flex-col justify-between mt-0 items-left">
                        <button type="submit" className="rounded-xl p-3 bg-gradient-to-r from-[#8cc084] to-white text-black w-[250px] font-bold text-xl">Add</button>
                    </div>

                </form>
            </div>
        </Container>
        </div>
    )
}
if (loading) {
    return <pre>Loading</pre>
}
if (error) {
    return <pre>Error {JSON.stringify(error, null, 3)}</pre>
}
} else {
return <pre>Error!</pre>
}
};