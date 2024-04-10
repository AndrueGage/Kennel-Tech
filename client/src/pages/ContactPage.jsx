import ClientNav from '../components/ClientNav';
import { useAuth } from '../utils/AuthContext';
import { Link } from 'react-router-dom';
import GitHub from '../assets/GitHub-logo.png'

export default function ContactPage() {
    const { loggedIn } = useAuth();

    if (!loggedIn) {
        // Handle case when user is not logged in
        return <p>Please <Link to="/login"> log in</Link></p>;
    }

    const contributors = [
        { name: 'Andrue Desmarais', github: 'https://github.com/AndrueGage' },
        { name: 'Michael Gerlach', github: 'https://github.com/Gerlach0130' },
        { name: 'Nicholas Holder', github: 'https://github.com/nickholder6425' },
        { name: 'William Dando', github: 'https://github.com/BrdwrdI' },
    ]
    const repoLink = [{name: 'Kennel Tech Repository', github: 'https://github.com/AndrueGage/Kennel-Tech'}]
    return (
        <div className='max-w-[1400px] mx-auto flex flex-col gap-8 my-5'>
            <ClientNav />
            <h1 className='font-bold text-xl'> Project Contributors </h1>
            <p className='font-semibold text-lg'>A special thank you to all who worked so hard on this project!<br /> A Link to their GitHubs and this projects repository are below.</p>
            <div className="border-2 border-neutral-800 bg-[#8CC084] rounded-xl p-8 flex flex-col gap-3 justify-between">
                <h2 className='font font-semibold text-lg '>Contributor Links</h2>
                <hr className='w-full h-1 inline-block' />
                {contributors.map(contributor => (
                    <div key={contributor.name} className='flex items-center' >
                        <img className='w-24 h-24 mr-4' src={GitHub} alt='GitHub logo' />
                        <a href={contributor.github} target='_blank' className='text-lg font-semibold'>{contributor.name}</a>
                    </div>
                ))}
                <h2 className='font font-semibold text-lg '>This Projects Repository</h2>
                <hr className='w-full h-1 inline-block' />
                {repoLink.map(repoLink =>(
                <div key={repoLink.name} className='flex items-center' >
                        <img className='w-24 h-24 mr-4' src={GitHub} alt='GitHub logo' />
                        <a href={repoLink.github} target='_blank' className='text-lg font-semibold'>{repoLink.name}</a>
                    </div>
                    ))}
            </div>
        </div>
    )
}