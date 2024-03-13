import Link from 'next/link';
import background from '@/app/home.png'

const Home = () => {
  return (
    <main className='home' style={{
      backgroundImage: `url(${background.src})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100vh",
      width: "100%",
      zIndex: 1,
    }}>
      <div className='welcome-container'>
      <h1 className='portfolio-header'>Creative Portfolio</h1>
      <div className='enter'>
      <Link href='/contents' style={{ textDecoration: 'none' }}>Enter</Link>
      </div>
      <h5 className='name'>Merin Yilmaz</h5>
      <h5 className='jobtitle'>Junior Software Developer</h5>
      </div>
    </main>
  );
}

export default Home;
