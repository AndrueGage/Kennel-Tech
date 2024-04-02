import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <header>
        <div className="navbar">
            <h1>Kennel Tech</h1>
            <nav>
                <ul className="navlist">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="account">My Account</Link>
                    </li>
                    <li>
                        <Link to="calendar">Calendar</Link>
                    </li>
                    <li>
                        <Link to="reservations">My Reservations</Link>
                    </li>
                    <li>
                        <Link to="doginfo">My Dogs</Link>
                    </li>
                    <li>
                        <Link to="contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    )
}