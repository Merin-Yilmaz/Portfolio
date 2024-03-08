import tipper from '@/app/projects/tipper.png'
import ncnews from '@/app/projects/ncnews.png'
import github from '@/app/contact/icons/github.png'
import background from '../../../public/background.png'

const Projects = () => {
    return (
        <main className="projects">
        <h1>Projects</h1>
        <div className="projects-container">
            <article><h3>Tipper</h3><img src={tipper.src}/>
            <p>A cashless tipping mobile web-app</p>
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
            <a href='https://github.com/Tipper-final-project'><img className='github-project' src={github.src}/></a>
            </article>
            <article><h3>NC News</h3><a href='https://myncnew.netlify.app/'><img src={ncnews.src}/></a>
            <p>A social news forum site with articles served up from an API I created</p>
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
            <a href='https://github.com/Merin-Yilmaz/NC-News-FE'><img className='github-project' src={github.src}/></a>
            </article>
        </div>
        </main>
    )
}

export default Projects;