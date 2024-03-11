import background from '@/app/education/education.png'

const Education = () => {
    return (
        <main className='education' id='background' style={{
            backgroundImage: `url(${background.src})`,
            backgroundSize: "cover",
            height: "100vh",
            width: "100vw",
          }}>
            <h1>Education</h1>
            <div className='education-container'>
              <h4>Lorem Ipsum</h4>
              <h5><span>Ipsum tempor voluptate quis.</span></h5>
              <h4>Lorem Ipsum</h4>
              <h5><span>Ipsum tempor voluptate quis.</span></h5>
              <h4>Lorem Ipsum</h4>
              <h5><span>Ipsum tempor voluptate quis.</span></h5>
            </div>
          </main>
    )
}

export default Education;