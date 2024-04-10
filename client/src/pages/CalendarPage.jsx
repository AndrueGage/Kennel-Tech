// import Calendar from '../components/DatePicker'
// import Container from '../components/Container'
// import ClientNav from '../components/ClientNav'
// import { useAuth } from '../utils/AuthContext';
// import { Link } from 'react-router-dom';

// export default function CalendarPage() {
//     const { loggedIn } = useAuth();

//     if (!loggedIn) {
//         // Handle case when user is not logged in
//         return <p>Please <Link to="/login"> log in</Link></p>;
//     }

    
//     return (
//         <div className='max-w-[1400px] mx-auto flex flex-col gap-8 my-5'>
//             <ClientNav />
//             <h1>Create A Reservation</h1>
//                 <div>
//                     <h3>Schedule</h3>
                    
//                 </div>
//         </div>
//     )
// }

import Container from '../components/Container'
import ClientNav from '../components/ClientNav'
import { useAuth } from '../utils/AuthContext';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import { MUTATION_UPDATE_USER } from '../utils/mutations';
import auth from '../utils/auth';
import { useState, useEffect } from 'react';

export default function CalendarPage() {
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
    reservationDate: '',
    reservationType: '',
    dog: '',
  })

  useEffect(() => {
    if (data) {
      const user = data.getUserById;
      setFormData({
        reservationDate: user.email,
        reservationType: user.firstName,
        dog: user.lastName,
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
      <h1 className='font-bold text-xl'>Add a new reservation</h1>

        <div>
          {data && (
            <form className='flex gap-5 border rounded-xl w-full p-3 mt-5 bg-neutral-300' onSubmit={handleSubmit}>
              <div className='flex flex-col gap-5'>
                <div className='flex gap-20 justify-start items-center'>
                  <label className='font-bold w-[120px]'>Select Reservation Type:</label>
                  <input onChange={handleChange} name="email" className='bg-white p-2 rounded-lg' type="text" value={formData.type} />
                </div>
                <div className='flex gap-20 justify-start items-center'>
                  <label className='font-bold w-[120px]'>Select Date:</label>
                  <input onChange={handleChange} name="email" className='bg-white p-2 rounded-lg' type="text" value={formData.date} />
                </div>
                <div className='flex gap-20 justify-start items-center'>
                  <label className='font-bold w-[120px]'>Select Dog:</label>
                  <input onChange={handleChange} name="email" className='bg-white p-2 rounded-lg' type="text" value={formData.dog} />
                </div>
                <button type='submit' className='border-2 rounded bg-white  font-semibold '>Save</button>
              </div>
          
            </form>
          )}
        </div>
    </div>
  )

}