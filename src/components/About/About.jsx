
import styles from './About.module.css'
import { getImageUrl } from '../../utils';

export const About = () => {
  return(
        <section className={styles.container} id='about'>
    <h1 className={styles.title}>About</h1>
    {/* this div will have the content of the About */}
    <div className={styles.content}>
    <img src={getImageUrl("about/mine.png")} alt="Mine" className={styles.aboutImage}></img>

    <ul className={styles.aboutItems}>
        {/* first card for the full stack developer */}
        <li className={styles.aboutListItem}>
            <img src={getImageUrl("about/mern.png")} alt="full stack" className={styles.aboutItemImg}></img>
            <div className={styles.aboutItemtext}>
                <h3 className={styles.aboutItemTitle}>Full Stack Developer</h3>
                <p className={styles.aboutItemPara}>Proficient in building dynamic and responsive web applications using MongoDB, Express.js, React.js, and Node.js. Skilled in leveraging Next.js for server-side rendering and static site generation, ensuring optimal performance and SEO</p>
            </div>
        </li>
        {/* cards for devOps Engineer */}
        <li className={styles.aboutListItem}>
            <img src={getImageUrl("about/devops.png")} alt="devops" className={styles.aboutItemImg}></img>
            <div className={styles.aboutItemtext}>
                <h3 className={styles.aboutItemTitle}>DevOps Engineer</h3>
                <p className={styles.aboutItemPara}>Experienced in implementing DevOps practices with AWS, Docker, Kubernetes,CI/CD pipeline and Jenkins to streamline deployment and maintain scalable infrastructure.</p>
            </div>
        </li>
    </ul>
           </div>
  </section>
   
)
}
