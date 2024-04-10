import ClientNav from '../components/ClientNav';
import { useAuth } from '../utils/AuthContext';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

export default function ContactPage() {
    const { loggedIn } = useAuth();

    if (!loggedIn) {
        // Handle case when user is not logged in
        return <p>Please <Link to="/login"> log in</Link></p>;
    }
    return (
        <div className='max-w-[1400px] mx-auto flex flex-col gap-8 my-5'>
            <ClientNav />
            <h1 className='font-bold text-xl'> Project Contributors </h1>
            <p className='font-semibold text-lg'>A special thank you to all who worked so hard on this project!<br /> A Link to their GitHubs and this projects repository are below.</p>
            <div className="border-2 border-neutral-800 rounded-xl p-8 flex flex-col gap-3 justify-between">
                <h2 className='font font-semibold text-lg '>Contributor Links</h2>
                <hr className='w-full h-1 inline-block' />
            </div>
        </div>
    )
}