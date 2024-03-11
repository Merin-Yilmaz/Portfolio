import background from '../contact/contact.png'
import phone from '@/app/contact/icons/phone.png'
import linkedin from '@/app/contact/icons/linkedin.png'
import github from '@/app/contact/icons/github.png'
import email from '@/app/contact/icons/email.png'

const Contact = () => {
    return (
        <main className='contact' style={{
            backgroundImage: `url(${background.src})`,
            backgroundSize: "cover",
            height: "100vh",
            width: "100vw",
          }}>
            <h1>Contact</h1>
            <div className='contact-container'>              
              <span className='number'><img src={phone.src}/>+447809 471 368</span>              
              <span className='linkedin'><img src={linkedin.src}/><a href='https://www.linkedin.com/in/merin-yilmaz/'>Merin-Yilmaz</a></span>              
              <span className='github'><img src={github.src}/><a href='https://github.com/Merin-Yilmaz'>Merin-Yilmaz</a></span>              
              <span className='email'><img src={email.src}/>merin.yilmaz@gmail.com</span>
            </div>
          </main>
    )
}

export default Contact;