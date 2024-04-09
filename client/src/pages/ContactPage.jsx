import ClientNav from '../components/ClientNav';
import Icon from '../assets/github-logo.png';

export default function ContactPage(){
    return (
    <div className='max-w-[1400px] mx-auto flex flex-col gap-8 my-5 mb-5'>
        <div className='mb-5'>
        <ClientNav />
        <h1 className='text-3xl mb-5 my-5 font-bold'><strong>Contact Us</strong></h1>
        <h2 className='text-2xl mb-5 my-5 font-bold'>Our Links</h2>
        <hr />
        </div>
        <div className='contact-links'>
            <div className='repo'>
            <h3 className='text-2xl font-bold'>Repo:</h3>
            <h3 className='text-2xl mb-5 font-bold'><a href='https://github.com/AndrueGage/Kennel-Tech'><img src={Icon} className='h-[200px] w-[200px]'></img></a></h3>
            </div>
            <div className='contributors'>
                <div className='title'>
                    <h3 className='text-2xl font-bold'>Contributors:</h3>
                </div>
                <div className='contributor-links'>
            <h3 className='text-2xl mb-5 font-bold'><a href='https://github.com/AndrueGage'><img src={Icon} className='h-[200px] w-[200px]'></img></a></h3>
            <h3 className='text-2xl mb-5 font-bold'><a href='https://github.com/BrdwrdI'><img src={Icon} className='h-[200px] w-[200px]'></img></a></h3>
            <h3 className='text-2xl mb-5 font-bold'><a href='https://github.com/nickholder6425'><img src={Icon} className='h-[200px] w-[200px]'></img></a></h3>
            <h3 className='text-2xl mb-5 font-bold'><a href='https://github.com/Gerlach0130'><img src={Icon} className='h-[200px] w-[200px]'></img></a></h3>
            </div>
            </div>
        </div>
    </div>
    )
}