import project from "../../data/project.json"
import styles from "./project.module.css";
import { ProjectCard } from './projectCard'

export const Project = () => {
  return <section className={styles.container} id='projects'>
    <h2 className={styles.title}>Projects</h2>

    {/* cards of project */}
    <div className={styles.project}>{
        project.map((project, id) => {
            return (
                <ProjectCard key={id} project={project}/>
            )
        })
        }</div>
    
  </section>
   
  
}
