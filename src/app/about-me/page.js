import background from '../about-me/about-me.png'

const AboutMe = () => {
    return (
        <main className="about-me-container" style={{
            backgroundImage: `url(${background.src})`,
            backgroundSize: "cover",
            height: "100vh",
            width: "100vw",
          }}>
            <h1>About Me</h1>
          </main>
    )
}

export default AboutMe