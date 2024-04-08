import Container from '../components/Container'
import ClientNav from '../components/ClientNav'

export default function AccountPage(){
    return (
      <div className='max-w-[1400px] mx-auto flex flex-col gap-8 my-5'>
      <ClientNav />
      <h1>Account Information</h1>
      <Container>
        <h3>Contact</h3>
      </Container>
      </div>
    )
}