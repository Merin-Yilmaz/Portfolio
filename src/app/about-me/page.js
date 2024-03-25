import background from '../about-me/about-me.png';
import Image from 'next/image';
import profile from '@/app/about-me/profile.jpeg'
import Navbar from '@/app/components/Navbar/Navbar'
import HomeNav from '../components/HomeNav/HomeNav';

const AboutMe = () => {
    return (
        <main className="about-me" style={{
            backgroundImage: `url(${background.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            width: "100vw"
          }}>
            <Navbar />
            <HomeNav />
            <h1>About Me</h1>
            <div className='about-me-container'>
            <Image className='profile' src={profile}  width={300} height={350} alt='Picture of Merin'/>
            <div className='about-description'>
              <p>Hello! I am Merin and I am a Junior Software Developer from the UK. 
              <br></br>Before immersing myself into the world of software, I was a professional dog groomer!</p>
              <p>I have always had an interest for tech and wanted to try my hand at web development where I can get creative.
              <br></br>I've recently had the privilege of completing an amazing Software Development bootcamp at Northcoders, where I learned so much about web technologies in a short amount of time.</p> 
              <p>When I'm not at the computer, I'm usually out on walks with my dog, doing yoga or pole fitness.</p>
            </div>
            </div>
          </main>
    )
}

export default AboutMe