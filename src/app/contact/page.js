import background from '../contact/contact.png'

const Contact = () => {
    return (
        <main className='contact-container' style={{
            backgroundImage: `url(${background.src})`,
            backgroundSize: "cover",
            height: "100vh",
            width: "100vw",
          }}>
            <h1>Contact</h1>
          </main>
    )
}

export default Contact;