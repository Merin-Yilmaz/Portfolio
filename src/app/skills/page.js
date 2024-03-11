import Image from "next/image";
import underline from '../../../public/underline.png'

const icons = require.context('../skills/icons', true)
const iconList = icons.keys().map(icon => icons(icon));

const Skills = () => {
    return (
        <main className="skills">
        <h1>Skills<img className="underline" src={underline.src}/></h1>
        <div className="skills-container">
            <ul>
            <li>Laboris est cillum quis deserunt consectetur.</li>   
            <li>Laboris est cillum quis deserunt consectetur.</li>   
            <li>Laboris est cillum quis deserunt consectetur.</li>   
            <li>Laboris est cillum quis deserunt consectetur.</li>   
            <li>Laboris est cillum quis deserunt consectetur.</li>   
            </ul>   
        <div className="skills-icons">
            {iconList.map((icon, index) => (
                <Image key={index} className='icons' src={icon.default} alt={`image-${index}`} width={80} height={100} />
                ))}
        </div>
        </div>
     </main>
    )
}

export default Skills;