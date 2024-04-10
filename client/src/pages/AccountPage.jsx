import Container from '../components/Container'
import ClientNav from '../components/ClientNav'
import { useAuth } from '../utils/AuthContext';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import { MUTATION_UPDATE_USER } from '../utils/mutations';
import auth from '../utils/auth';
import { useState, useEffect } from 'react';

export default function AccountPage() {
  const { loggedIn } = useAuth();
  const [updateUserById, { data: userConfirm, loading: userLoading, error: userError }] = useMutation(MUTATION_UPDATE_USER)

  const user = auth.getUser()

  if (!loggedIn) {
    // Handle case when user is not logged in
    return <p>Please <Link to="/login"> log in</Link></p>;
  }

  const { data, error, loading } = useQuery(QUERY_USER, {
    variables: {
      id: user.data._id
    }
  })

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    vetOffice: '',
    emergencyContact: '',
    address: '',
  })

  useEffect(() => {
    if (data) {
      const user = data.getUserById;
      setFormData({
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone ? user.phone : '',
        vetOffice: user.vetOffice ? user.vetOffice : '',
        emergencyContact: user.emergencyContact ? user.emergencyContact : '',
        address: user.address ? user.address : '',
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
    const { data } = await updateUserById({
      variables: {
        id: user.data._id,
        ...formData
      }
    })

    if (data) {
      window.location.assign('/account')
    }
    // Handle form submission here
  };




  return (
    <div className='max-w-[1400px] mx-auto flex flex-col gap-8 my-5'>
      <ClientNav />
      <h1 className='font-bold text-xl'>Account Information</h1>

        <div>
          {data && (
            <form className='flex gap-5 border rounded-xl w-full p-3 mt-5 bg-[#8CC084]' onSubmit={handleSubmit}>
              <div className='flex flex-col gap-5'>
                <div className='flex gap-20 justify-start items-center'>
                  <label className='font-bold w-[120px]'>Email:</label>
                  <input onChange={handleChange} name="email" className='bg-white p-2 rounded-lg' type="text" value={formData.email} />
                </div>
                <div className='flex gap-20 justify-start items-center'>
                  <label className='font-bold w-[120px]'>First Name:</label>
                  <input onChange={handleChange} name='firstName' className='bg-white p-2 rounded-lg' type="text" value={formData.firstName} />
                </div>
                <div className='flex gap-20 justify-start items-center'>
                  <label className='font-bold w-[120px]'>Last Name:</label>
                  <input onChange={handleChange} name='lastName' className='bg-white p-2 rounded-lg' type="text" value={formData.lastName} />
                </div>
                <div className='flex gap-20 justify-start items-center'>
                  <label className='font-bold w-[120px]'>Phone:</label>
                  <input onChange={handleChange} name='phone' className='bg-white p-2 rounded-lg' type="text" value={formData.phone} />
                </div>
                <div className='flex gap-20 justify-start items-center'>
                  <label className='font-bold w-[120px]'>Vet Office:</label>
                  <input onChange={handleChange} name='vetOffice' className='bg-white p-2 rounded-lg' type="text" value={formData.vetOffice} />
                </div>
                <div className='flex gap-20 justify-start items-center'>
                  <label className='font-bold w-[120px]'>Emergency Contact:</label>
                  <input onChange={handleChange} name='emergencyContact' className='bg-white p-2 rounded-lg' type="text" value={formData.emergencyContact} />
                </div>
                <div className='flex gap-20 justify-start items-center'>
                  <label className='font-bold w-[120px]'>Address:</label>
                  <input onChange={handleChange} name='address' className='bg-white p-2 rounded-lg' type="text" value={formData.address} />
                </div>
                <button type='submit' className='border-2 rounded bg-[#C1D7AE]  font-semibold '>Save</button>
              </div>
          
            </form>
          )}
        </div>
    </div>
  )

}