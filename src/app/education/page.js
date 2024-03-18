import background from '@/app/education/education.png'
import Navbar from '../components/Navbar/Navbar';
import HomeNav from '../components/HomeNav/HomeNav';

const Education = () => {
    return (
        <main className='education' id='background' style={{
            backgroundImage: `url(${background.src})`,
            backgroundSize: "cover",
            height: "100vh",
            width: "100vw",
          }}>
            <Navbar />
            <HomeNav />
            <h1>Education</h1>
            <div className='education-container'>
              <h4>Trainee Software Developer</h4>
              <h5><span>Northcoders - 03/2024</span></h5>
              <h4>Professional Dog Grooming</h4>
              <h5><span>Dog Diversity Grooming School, Melbourne - 11/2019</span></h5>
              <h4>BSc(Hons) Psychology</h4>
              <h5><span>City University London - 06/2014</span></h5>
            </div>
          </main>
    )
}

export default Education;