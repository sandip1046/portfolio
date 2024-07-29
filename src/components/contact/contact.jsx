import { getImageUrl } from '../../utils'
import styles from "./contact.module.css"

export const Contact = () => {
  return( <footer className={styles.container} id='Contact'> 
    <div className={styles.leftSide}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
    </div>
    <ul className={styles.rightSide}>
        <li className={styles.listItem}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="email Icon"></img>
            <a href="mailto:myemail@211fa01046@gmail.com" >211fa01046@gmail.com</a>
        </li>
        <li className={styles.listItem}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin Icon"></img>
            <a href="https://www.linkedin.com/in/sandip-kumar-yadav-1046s" >www.linkedin.com/in/sandip-kumar-yadav-1046s</a>
        </li>
        <li className={styles.listItem}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Git Hub Icon"></img>
            <a href="https://github.com/sandip1046/" >https://github.com/sandip1046/</a>
        </li>
    </ul>

  </footer>)
}
