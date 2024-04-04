import Calendar from '../components/DatePicker'
import Container from '../components/Container'

export default function CalendarPage() {
    return (
        <>
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