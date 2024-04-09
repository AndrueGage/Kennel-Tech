import { Link } from 'react-router-dom'
import LogoutBtn from './LogoutBtn'
import UserWelcome from './UserWelcome'

export default function ClientNav() {
    return (
        <header>
        <div className="border-2 border-neutral-800 rounded-xl p-3 flex flex-col md:flex-row items-center justify-center">
            <h1 className='font-bold text-xl md:text-2xl'>Kennel Tech</h1>
            <nav className='md:ml-auto px-4'>
                <ul className="flex flex-col md:flex-row gap-5 justify-center items-center">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/account">My Account</Link>
                    </li>
                    <li>
                        <Link to="/reservations">My Reservations</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contributors</Link>
                    </li>
                    <UserWelcome />
                    <LogoutBtn />
                </ul>
            </nav>
        </div>
    </header>
    )
}