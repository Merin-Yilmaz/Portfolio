'use client'
import Image from "next/image";
import underline from '../../../public/underline.png'
import Navbar from "../components/Navbar/Navbar";
import { motion } from "framer-motion";

const icons = require.context('../skills/icons', true)
const iconList = icons.keys().map(icon => icons(icon));

const Skills = () => {
    return (
        <main className="skills">
        <Navbar />
        <h1>Skills<img className="underline" src={underline.src}/></h1>
        <div className="skills-container">
            <ul>
            <li>Laboris est cillum quis deserunt consectetur.</li>   
            <li>Laboris est cillum quis deserunt consectetur.</li>   
            <li>Laboris est cillum quis deserunt consectetur.</li>   
            <li>Laboris est cillum quis deserunt consectetur.</li>   
            <li>Laboris est cillum quis deserunt consectetur.</li>   
            </ul>   
        <motion.div initial={{ x: 20, opacity: 0}} animate={{ x: 20, opacity: 1}} transition={{ ease: 'easeInOut', duration: 0.85}} className="skills-icons">
            {iconList.map((icon, index) => (
                <Image key={index} className='icons' src={icon.default} alt={`image-${index}`} width={80} height={100} />
                ))}
        </motion.div>
        </div>
     </main>
    )
}

export default Skills;