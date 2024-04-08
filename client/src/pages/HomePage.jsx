import { useQuery } from '@apollo/client';
import Card from '../components/Card'
import DogContainer from '../components/DogContainer';
import auth from '../utils/auth';
import { QUERY_USER } from '../utils/queries';
import ClientNav from '../components/ClientNav';

export default function HomePage() {

    const loggedIn = auth.loggedIn();
    if (loggedIn) {
        const user = auth.getUser();
        if (user) {
        const { loading, data, error } = useQuery(QUERY_USER, { variables: { id: user.data._id } });
            if (data) {
                let dogs = data.getUserById.dogs
                return (
                    <div className='max-w-[1400px] mx-auto flex flex-col gap-8 my-5'>
                        <ClientNav />
                        <div className="border-2 border-neutral-800 rounded-xl p-8 flex flex-row gap-3 justify-between">
                            <div className="dog-cards">
                                <DogContainer dogData={dogs} />
                            </div>
                            <Card />
                        </div>
                    </div>
                )
            }
            if (loading) {
                return <p>Loading</p>
            }
            if (error) {
                return <p>Error, <pre>{JSON.stringify(error, null, 3)}</pre></p>
            }
        }
    } else {
        return <p>You are not logged in</p>
    }
}