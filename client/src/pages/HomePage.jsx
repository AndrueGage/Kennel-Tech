import { useQuery } from '@apollo/client';
import Card from '../components/Card'
import DogContainer from '../components/DogContainer';
import auth from '../utils/auth';
import { QUERY_USER } from '../utils/queries';

export default function HomePage() {

    const loggedIn = auth.loggedIn();
    if (loggedIn) {
        const user = auth.getUser();
        if (user) {
            const { loading, data } = useQuery(QUERY_USER, { variables: { id: user.data._id } });
            if (data) {
                return (
                    <div className="border-2 rounded-xl ">
                        <div className="dog-cards">
                            {data.getUserById.dogs.length ? <DogContainer dogData={data.getUserById.dogs} /> : <p>Add your dog!</p>}
                        </div>
                        <Card />
                    </div>
                )
            }
        }

    }
}