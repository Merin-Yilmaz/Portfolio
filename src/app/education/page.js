import background from '@/app/education/education.png'
import Navbar from '../components/Navbar/Navbar';
import HomeNav from '../components/HomeNav/HomeNav';
import nc from '@/app/education/nc.png'
import cul from '@/app/education/cul.png'
import dd from '@/app/education/dd.png'
import Link from 'next/link';

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
            <Link href={`/Merin_Yilmaz_Certificate.pdf`} download="Merin_Yilmaz_CV" target="_blank" rel="noopener noreferrer" >
              <h4>Trainee Software Developer</h4>
              </Link>
              <Link href='https://northcoders.com/' target="_blank">
              <h5><span><img src={nc.src} style={{ width: "50px", height: "50px"}}/>Northcoders - 03/2024</span></h5></Link>
              <h4>Professional Dog Grooming</h4>
              <Link href='https://dogdiversity.com.au/' target="_blank">
              <h5><span><img src={dd.src} style={{ width: "50px", height: "50px"}}/>Dog Diversity Grooming School, Melbourne - 11/2019</span></h5></Link>
              <h4>BSc(Hons) Psychology</h4>
              <Link href='https://www.city.ac.uk/' target="_blank">
              <h5><span><img src={cul.src} style={{ width: "60px", height: "50px"}}/>City University London - 06/2014</span></h5></Link>
            </div>
          </main>
    )
}

export default Education;