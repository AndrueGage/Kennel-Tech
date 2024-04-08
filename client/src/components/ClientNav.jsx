import { Link } from 'react-router-dom'

export default function ClientNav() {
    return (
        <header>
        <div className="border-2 border-neutral-800 rounded-xl p-3 flex flex-row items-center">
            <h1 className='kenneltech'>Kennel Tech</h1>
            <nav className='ml-auto px-4'>
                <ul className="flex flex-row gap-5">
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
                        <Link to="/doginfo">Dog Info</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    )
}