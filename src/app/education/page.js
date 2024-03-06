import background from '@/app/education/education.png'

const Education = () => {
    return (
        <main className='education-container' style={{
            backgroundImage: `url(${background.src})`,
            backgroundSize: "cover",
            height: "100vh",
            width: "100vw",
          }}>
            <h1>Education</h1>
          </main>
    )
}

export default Education;