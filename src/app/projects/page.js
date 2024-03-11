import tipper from '@/app/projects/tipper.png'
import ncnews from '@/app/projects/ncnews.png'
import github from '@/app/contact/icons/github.png'
import indigo from '@/app/projects/indigo.png'
import underline from '../../../public/underline.png'

const Projects = () => {
    return (
        <main className="projects">
        <h1>Projects<img className="underline" src={underline.src}/></h1>

        <div className="projects-container">
            <article><h3>Tipper</h3><a href='https://tipper.merin-yilmaz.co.uk/' target='_blank'><img src={tipper.src}/></a>
            <p>Cashless tipping mobile web-app</p>
            <div className='tech-list'>
                <div>Node.js</div>
                <div>JavaScript</div>
                <div>Jest</div>
                <div>Supertest</div>
                <div>Express.js</div>
                <div>MongoDB</div>
                <div>Next.js</div>
                <div>Cryptr</div>
                <div>Stripe</div>
                <div>Bootstrap</div>
                <div>Scss</div>
                <div>Vercel</div>
            </div>
            <a href='https://github.com/Tipper-final-project' target='_blank'><img className='github-project' src={github.src}/></a>
            </article>
            <article><h3>NC News</h3><a href='https://myncnew.netlify.app/' target='_blank'><img src={ncnews.src}/></a>
            <p>Social news forum site with articles served up from an API I created</p>
            <div className='tech-list'>
                <div>Node.js</div>
                <div>JavaScript</div>
                <div>Jest</div>
                <div>Supertest</div>
                <div>Express.js</div>
                <div>SQL</div>
                <div>Seed</div>
                <div>PostgreSQL</div>
                <div>PG-Format</div>
                <div>Dotenv</div>
                <div>ElephantSQL</div>
                <div>Render</div>
                <div>Axios</div>
                <div>React.js</div>
                <div>CSS</div>
                <div>Bootstrap</div>
                <div>Netlify</div>
            </div>
            <a href='https://github.com/Merin-Yilmaz/NC-News-FE' target='_blank'><img className='github-project' src={github.src}/></a>
            </article>
            <article><h3>Indigo Energy</h3><a href='https://dev.indigo-energy.co.uk/' target='_blank'><img className='indigo' src={indigo.src}/></a>
            <p>Solar Power installation company site</p>
            <div className='tech-list'>
                <div>Wordpress</div>
                <div>CSS</div>
            </div>            </article>
        </div>
        </main>
    )
}

export default Projects;