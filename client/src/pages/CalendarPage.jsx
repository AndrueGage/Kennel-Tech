import Calendar from '../components/DatePicker'
import Container from '../components/Container'
import ClientNav from '../components/ClientNav'

export default function CalendarPage() {
    return (
        <>
        <ClientNav />
        <h1>Create A Reservation</h1>
        <Container>
        <div>
            <h3>Schedule</h3>
            <Calendar />
        </div>
        </Container>
        </>
    )
}