import Container from '../components/Container'
import ClientNav from '../components/ClientNav'

export default function DogInfoPage(){
    return (
        <div className='max-w-[1400px] mx-auto flex flex-col gap-8 my-5'>
        <ClientNav />
        <h1>Dog Information</h1>
        <Container>
            <h3>Dog(s) Information</h3>
        </Container>
        </div>
    )
}