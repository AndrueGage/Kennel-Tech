import Calendar from '../components/DatePicker'
import Container from '../components/Container'
import ClientNav from '../components/ClientNav'
import { useAuth } from '../utils/AuthContext';
import { Link } from 'react-router-dom';

export default function CalendarPage() {
    const { loggedIn } = useAuth();

    if (!loggedIn) {
        // Handle case when user is not logged in
        return <p>Please <Link to="/login"> log in</Link></p>;
    }
    return (
        <div className='max-w-[1400px] mx-auto flex flex-col gap-8 my-5'>
            <ClientNav />
            <h1>Create A Reservation</h1>
            <Container>
                <div>
                    <h3>Schedule</h3>
                    <Calendar />
                </div>
            </Container>
        </div>
    )
}