import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./projectCard.module.css";

// const project = props.project   by this we can extract the project from the props
// now for better experiance use destructring
//  (prop)   is same as ({project})   then we can extract the property like project.title,etc
// for even better experiance we can extract all the property like project: {title,description..} now we can direct use the property

export const ProjectCard = ({project:{title, description,skills, demo, source,imageSrc}}) => {
  return <div className={styles.container}> 
  <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.image}></img>
  <h3 className={styles.title}>{title}</h3>
  <p className={styles.description}>{description}</p>
  <ul className={styles.skills}>{
      skills.map((skills,id) => {
          return <li className={styles.skill} key={id}>{skills}</li>
      })
}</ul>

{/* this contains the link of demo and code bases */}
<div className={styles.links}>
  <a  href={demo} className={styles.link}> Demo</a>
  <a href={source} className={styles.link}> Source</a>
  </div>
  </div>
}
