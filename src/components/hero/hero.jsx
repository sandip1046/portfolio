import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            {/* first div will contains all the texr on left hand side */}
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Hi, I'm Sandip
                </h1>
                <span className={styles.stackTitle}>FULL STACK DEVELOPER</span>
                <p className={styles.description}>Full Stack Developer specializing in the MERN stack with expertise in Next.js and DevOps. Skilled in building dynamic web applications and leveraging AWS and Docker for scalable deployments, I excel in creating high-performance, responsive solutions.</p>
                <a href="mailto:211fa01046@gmail.com" className={styles.contactBtn}>Contact me</a>
            </div>

            {/* on the rigth hand side we have image */}
            <img src={getImageUrl("hero/coder.png")} alt="Hero Image" className={styles.heroImage} />


        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
        </section>

        
    )
}
