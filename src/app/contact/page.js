import background from '../contact/contact.png'
import phone from '@/app/contact/icons/phone.png'
import linkedin from '@/app/contact/icons/linkedin.png'
import github from '@/app/contact/icons/github.png'
import email from '@/app/contact/icons/email.png'
import Navbar from '../components/Navbar/Navbar'
import HomeNav from '../components/HomeNav/HomeNav'

const Contact = () => {
    return (
        <main className='contact' style={{
            backgroundImage: `url(${background.src})`,
            backgroundSize: "cover",
            height: "100vh",
            width: "100vw"
          }}>
            <Navbar />
            <HomeNav />
            <h1>Contact</h1>
            <div className='contact-container'>              
              <span className='number'><a href='Tel: +447809471368' target="_blank"><img src={phone.src}/>+447809 471 368</a></span>              
              <span className='linkedin'><a href='https://www.linkedin.com/in/merin-yilmaz/' target="_blank"><img src={linkedin.src}/>Merin-Yilmaz</a></span>              
              <span className='github'><a href='https://github.com/Merin-Yilmaz' target="_blank"><img src={github.src}/>Merin-Yilmaz</a></span>              
              <span className='email'><a href='mailto: merin.yilmaz@gmail.com' target="_blank"><img src={email.src}/>merin.yilmaz@gmail.com</a></span>
            </div>
          </main>
    )
}

export default Contact;