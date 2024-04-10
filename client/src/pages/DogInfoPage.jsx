import Container from '../components/Container'
import ClientNav from '../components/ClientNav'
import { useAuth } from '../utils/AuthContext'
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_DOG_BY_ID } from '../utils/queries';
import { MUTATION_UPDATE_DOG_BY_ID } from '../utils/mutations';
import { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';

export default function DogInfoPage() {

    const { loggedIn } = useAuth();

    const [updateDogById, { data: dogConfirm, loading: dogLoading, error: dogError }] = useMutation(MUTATION_UPDATE_DOG_BY_ID)

    if (!loggedIn) {
        // Handle case when user is not logged in
        return <p>Please <Link to="/login"> log in</Link></p>;
    }

    let { id } = useParams();

    const { data, loading, error } = useQuery(QUERY_DOG_BY_ID, {
        variables: {
            id: id
        }
    })

    const [formData, setFormData] = useState({
        name: '',
        age: '',
        breed: '',
        sex: '',
        weight: '',
        vet: '',
        vaccine: '',
        image: '',
    })

    useEffect(() => {
        if (data) {
            const dog = data.getDogById;
            setFormData({
                name: dog.name,
                age: dog.age,
                breed: dog.breed,
                sex: dog.sex,
                weight: dog.weight,
                vet: dog.vet,
                vaccine: dog.vaccine,
                image: dog.image,
                // Set other fields accordingly
            });
        }
    }, [data]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.table(formData)
        const { data } = await updateDogById({
            variables: {
                id: id,
                ...formData
            }
        })

        if (data) {
            window.location.assign('/')
        }
        // Handle form submission here
    };

    if (id) {
        if (data) {
            return (
                <div className='max-w-[1400px] mx-auto flex flex-col gap-8 my-5'>
                    <ClientNav />

                    <div className='p-10 bg-stone-400 m-5 rounded-xl relative'>

                        <h1>My Dogs</h1>
                        <h3>Dog(s) Information</h3>

                        <form className='flex gap-5' onSubmit={handleSubmit}>
                            <div>
                                {formData.image && (
                                    <img alt='Dog picture' className='border bg-white aspect-square w-[200px] h-[200px] object-cover rounded-xl' src={formData.image} />
                                )}
                            </div>

                            <div className='flex flex-col gap-5'>
                                <div className='flex gap-3 justify-start items-center'>
                                    <label className='font-bold w-20'>Name:</label>
                                    <input onChange={handleChange} name="name" className='bg-white p-2 rounded-lg' type="text" value={formData.name} />
                                </div>
                                <div className='flex gap-3 justify-start items-center'>
                                    <label className='font-bold w-20'>Age:</label>
                                    <input onChange={handleChange} name='age' className='bg-white p-2 rounded-lg' type="text" value={formData.age} />
                                </div>
                                <div className='flex gap-3 justify-start items-center'>
                                    <label className='font-bold w-20'>Breed:</label>
                                    <input onChange={handleChange} name='breed' className='bg-white p-2 rounded-lg' type="text" value={formData.breed} />
                                </div>
                                <div className='flex gap-3 justify-start items-center'>
                                    <label className='font-bold w-20'>Sex:</label>
                                    <input onChange={handleChange} name='sex' className='bg-white p-2 rounded-lg' type="text" value={formData.sex} />
                                </div>
                                <div className='flex gap-3 justify-start items-center'>
                                    <label className='font-bold w-20'>Weight:</label>
                                    <input onChange={handleChange} name='weight' className='bg-white p-2 rounded-lg' type="text" value={formData.weight} />
                                </div>
                                <div className='flex gap-3 justify-start items-center'>
                                    <label className='font-bold w-20'>Vet:</label>
                                    <input onChange={handleChange} name='vet' className='bg-white p-2 rounded-lg' type="text" value={formData.vet} />
                                </div>
                                <div className='flex gap-3 justify-start items-center'>
                                    <label className='font-bold w-20'>Vaccine:</label>
                                    <div>
                                        <input
                                            onChange={() => handleChange({ target: { name: 'vaccine', value: 'Yes' } })}
                                            name='vaccine'
                                            className='bg-white p-2 rounded-lg'
                                            type="checkbox"
                                            checked={formData.vaccine === true || formData.vaccine === "Yes"}
                                        />
                                        <label htmlFor="vaccineYes">Yes</label>
                                    </div>
                                    <div>
                                        <input
                                            onChange={() => handleChange({ target: { name: 'vaccine', value: 'No' } })}
                                            name='vaccine'
                                            className='bg-white p-2 rounded-lg'
                                            type="checkbox"
                                            checked={formData.vaccine === false || formData.vaccine === "No"}
                                        />
                                        <label htmlFor="vaccineNo">No</label>
                                    </div>
                                </div>
                                {/* <div className='flex gap-3 justify-start items-center'>
                                    <label className='font-bold w-20'>Image:</label>
                                    <input onChange={handleChange} name='image' className='bg-white p-2 rounded-lg' type="text" value={formData.image}  />
                                </div> */}
                            </div>
                            <button type='submit' className='absolute top-10 right-10'>Save</button>
                        </form>


                    </div>
                </div>
            )
        }
        if (loading) {
            return <p>Loading...</p>
        }
        if (error) {
            return <pre>{JSON.stringify(error, null, 3)}</pre>
        }

    } else {
        return (
            <div className='max-w-[1400px] mx-auto flex flex-col gap-8 my-5'>
                <ClientNav />
                <h1>My Dogs</h1>
                <Container>
                    <h3>Dog(s) Information</h3>
                    <p>You either dont have dogs or you shouldn't be here!</p>
                    <Link to={'/'}>Click here to fix.</Link>
                </Container>
            </div>
        )
    }
}