import Calendar from '../components/DatePicker'
import Container from '../components/Container'
import ClientNav from '../components/ClientNav'

export default function CalendarPage() {
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