import React from 'react'
import styles from "./skill.module.css";
import { getImageUrl } from '../../utils';
import skill from "../../data/skill.json";


export const Skill = () => {
  return (
    <section className={styles.container} id='skill'>
        <h2 className={styles.title}>SKILLS</h2>
        <div className={styles.content}>
            <div className={styles.skills}>{
                skill.map((skill, id) => {
                    return (
                        <div key={id} className={styles.skill}>
                            <div className={styles.skillImgContainer}>
                                <img  className={styles.skillImg} src={getImageUrl(skill.imageSrc)} alt={skill.title}></img>
                                </div>
                                <p>{skill.title}</p>

                        </div>

                    )
                } )
           }
                </div>
            <ul></ul>


        </div>
        

    </section>
  )
}
