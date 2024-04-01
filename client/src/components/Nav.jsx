import { Link } from 'react-router-dom'
export default function Nav() {
    return (
        <header>
        <div className="navbar">
            <h1 className="name">Andrue Desmarais</h1>
            <nav>
                <ul className="navlist">
                    <li>
                        <Link to="/" className="animate">Home</Link>
                    </li>
                    <li>
                        <Link to="account" className="animate">My Account</Link>
                    </li>
                    <li>
                        <Link to="reservations" className="animate">My Reservations</Link>
                    </li>
                    <li>
                        <Link to="doginfo" className="animate">My Dogs</Link>
                    </li>
                    <li>
                        <Link to="contact" className="animate">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    )
}