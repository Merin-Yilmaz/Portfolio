"use client";
import React, { useState } from "react";
import Styles from '@/app/components/Navbar/navbar.module.scss'
import { motion } from "framer-motion";

const Navbar = () => {
    const [burgerMenuActive, setBurgerMenuActive] = useState(false)

    const toggleBurgerMenu = () => {
        setBurgerMenuActive(!burgerMenuActive);
    };

    const motionVariants = {
        open: {
            opactiy: 1,
            transition: {
                staggerChildren: 0.1,
                ease: "easeOut",
                type: "spring"
            }
        },
        closed: {
            opactiy: 0,
            transition: {
                staggerChildren: 0,
                duration: 0
            }
        }
    }

    const listItemVariants = {
        open: {
            y: 0,
            opactiy: 1,
            transition: {
                duration: 0.35,
                ease: "easeOut"
            }
        },
        closed: {
            y: 100,
            opactiy: 0,
            transition: {
                duration: 0
            }
        }
    }

    return (
        <div className={`${Styles.navbar} ${ burgerMenuActive ? Styles.active : ""}`}>
            <div className={Styles.navigation}>
                <div className={Styles.burgerMenuContainer} onClick={() => toggleBurgerMenu()}>
                    <div className={Styles.burgerMenuTrigger}></div>
                    <div className={Styles.burgerMenu}></div>
                </div>
                <div className={Styles.content}>
                    <motion.ul animate={burgerMenuActive ? 'open' : 'closed'} variants={motionVariants}>
                        <motion.li variants={listItemVariants}>
                            <a href="/about-me">About Me</a>
                        </motion.li>
                        <motion.li variants={listItemVariants}>
                            <a href="/education">Education</a>
                        </motion.li>
                        <motion.li variants={listItemVariants}>
                            <a href="/projects">Projects</a>
                        </motion.li>
                        <motion.li variants={listItemVariants}>
                            <a href="/skills">Skills</a>
                        </motion.li>
                        <motion.li variants={listItemVariants}>
                            <a href="/contact">Contact</a>
                        </motion.li>
                    </motion.ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar