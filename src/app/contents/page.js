"use client"
import Link from 'next/link';

const Contents = () => {
    return (
        <main className="contents">
            <h1>Table of Contents</h1>
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
            <Link href='/cv' style={{ textDecoration: 'none' }}>
                Download CV
                </Link>
            </div>
            </div>
        </main>
    )
}

export default Contents;