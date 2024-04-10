import { useQuery } from '@apollo/client';
import { useAuth } from '../utils/AuthContext';
import Card from '../components/Card'
import DogContainer from '../components/DogContainer';
import auth from '../utils/auth';
import { QUERY_USER } from '../utils/queries';
import ClientNav from '../components/ClientNav';
import { Link } from 'react-router-dom';

export default function HomePage() {

    const { loggedIn } = useAuth();

    if (!loggedIn) {
        // Handle case when user is not logged in
        return <p>Please <Link to="/login"> log in</Link></p>;
    }

    const user = auth.getUser();
    const { loading, data, error } = useQuery(QUERY_USER, { variables: { id: user.data._id } });

    if (loading) return <p>Loading...</p>;
    if (error) return <pre>{JSON.stringify(error, null, 3)}</pre>;

    if (data) {
        return (
            <div className='max-w-[1400px] mx-auto flex flex-col gap-8 my-5 '>
                <ClientNav />
                <div className="border-2 border-neutral-800 rounded-xl p-8 flex flex-col md:flex-row gap-3 justify-between bg-[#8CC084]">
                    <div className="dog-cards">
                        <DogContainer dogData={data.getUserById.dogs} />
                    </div>
                    <Card />
                </div>
            </div>
        );
    }
    
}