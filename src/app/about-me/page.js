import background from '../about-me/about-me.png';
import Image from 'next/image';
import profile from '@/app/about-me/profile.jpeg'

const AboutMe = () => {
    return (
        <main className="about-me" style={{
            backgroundImage: `url(${background.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            width: "100vw"
          }}>
            <h1>About Me</h1>
            <div className='about-me-container'>
            <Image className='profile' src={profile}  width={300} height={350} alt='Picture of Merin'/>
            <div className='about-description'>
              <p>Esse velit labore adipisicing sit in labore non enim veniam sunt culpa consequat.
              <br></br>In pariatur pariatur do officia adipisicing laborum proident. </p>
              <p>Esse magna do occaecat nostrud Lorem consectetur do amet commodo veniam mollit.
              <br></br>Excepteur amet dolor elit anim ex ea.</p> 
              <p>Amet officia non Lorem laborum.
              <br></br>Reprehenderit pariatur nisi non excepteur anim cupidatat duis.</p>
            </div>
            </div>
          </main>
    )
}

export default AboutMe