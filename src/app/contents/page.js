"use client"
import Link from 'next/link';
import underline from '../../../public/underline.png'

const Contents = () => {
    return (
        <main className="contents">
            <h1>Table of Contents<img className='underline' src={underline.src}/></h1>
            <div className='contents-container'>
            <div className='about-me'>
                <Link href="/about-me" style={{ textDecoration: 'none' }}>
                    About Me
                    </Link>
            </div>
            <div className='skills'>
                <Link href='/skills' style={{ textDecoration: 'none' }}>
                Skills
                </Link>
            </div>
            <div className='projects'>
            <Link href='/projects' style={{ textDecoration: 'none' }}>
                Projects
                </Link>
            </div>
            <div className='education'>
            <Link href='/education' style={{ textDecoration: 'none' }}>
                Education
                </Link>
            </div>
            <div className='contact'>
            <Link href='/contact' style={{ textDecoration: 'none' }}>
                Contact
                </Link>
            </div>
            <div className='cv'>
            <Link href={`/Merin_Yilmaz_CV.pdf`} download="Merin_Yilmaz_CV" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <div className='download'>Download</div> CV
                </Link>
            </div>
            </div>
        </main>
    )
}

export default Contents;