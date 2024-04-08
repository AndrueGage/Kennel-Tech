import Container from '../components/Container'
import ClientNav from '../components/ClientNav'
import { Space, Table, Tag } from 'antd';
import { useQuery } from '@apollo/client';
import { QUERY_DOG_USER_RESERVATIONS } from '../utils/queries';
import auth from '../utils/auth';
import { Link } from 'react-router-dom';



const columns = [
    {
        title: 'Dog',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Service Type',
        dataIndex: 'reservationType',
        key: 'reservationType',
    },
    {
        title: 'Start Date',
        dataIndex: 'reservationDate_Time',
        key: 'reservationDate_Time',
    },
    {
        title: 'Status',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = 'green';
                    if (tag === 'Complete') {
                        color = 'green'
                    } else if (tag === 'Cancelled') {
                        color = 'red'
                    } else if (tag === 'Pending') {
                        color = 'blue'
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
];


export default function ReservationsPage() {
    const user = auth.getUser();
    if (user) {
        const { loading, data, error } = useQuery(QUERY_DOG_USER_RESERVATIONS, { variables: { id: user.data._id } });
        if (data) {
            let reservationsArr = []
            data.getUsersDogReservations.dogs.forEach(dog => {
                let dogName = dog.name
                dog.reservations.forEach(reservation => {
                    const newReservation = { ...reservation, name: dogName }
                    reservationsArr.push(newReservation)
                })
            })
            const newData = []
            reservationsArr.forEach((reservation, index) => {
                const reservationDate = new Date(reservation.reservationDate_Time);

                // Extract components
                const month = reservationDate.getMonth() + 1; // Months are zero-based, so add 1
                const day = reservationDate.getDate();
                const year = reservationDate.getFullYear();
                const hours = reservationDate.getHours() === 0 ? 12 : reservationDate.getHours();
                const minutes = reservationDate.getMinutes();

                // Format as "month day year time"
                const formattedDate = `${month}/${day}/${year} ${hours}:${minutes}`;
                newData.push({
                    key: index,
                    name: reservation.name,
                    reservationType: reservation.reservationType,
                    reservationDate_Time: formattedDate,
                    tags: [reservation.status]
                })
            })
            return (
                <div className='max-w-[1400px] mx-auto flex flex-col gap-8 my-5'>
                    <ClientNav />
                    <h1 className='font-bold text-xl'>Reservations</h1>
                    <Link to="calendar">Request Reservation</Link>
                    <Container>
                        <Table columns={columns} dataSource={newData} />
                    </Container>
                </div>
            )
        }
        if (loading) {
            return <pre>Loading</pre>
        }
        if (error) {
            return <pre>Error {JSON.stringify(error, null, 3)}</pre>
        }
    } else {
        return <pre>Could Not get user?</pre>
    }
}
