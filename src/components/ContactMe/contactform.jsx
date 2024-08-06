
import styles from "./contactform.module.css"

export const Contactform = () => {
  return (
    <div className={styles.container}>
        <div className={styles.Heading}>Get In Touch</div>
    <form action="https://getform.io/f/adryqyja" method="post" className={styles.Formcontainer}>
        {/* for fname lname phone and email */}
        <div className={styles.info}>
            <input type="text" name="first name" placeholder="First Name" className={styles.infoInput}/>
            <input type="text" name="last name" placeholder="Last Name" className={styles.infoInput}/>
            <input type="text" name="email" placeholder="email@gmail.com" className={styles.infoInput}/>
            <input type="Number" name="Phone Number" placeholder="Phone Number" className={styles.infoInput}/>
            
        </div> 

        {/* for Address */}
        <div className={styles.address}>
        <textarea type="text" name="address"  placeholder="Address" className={styles.adressInput}/>
        </div>
        {/* for message */}
        <div className={styles.message}></div>
        <textarea type="text" name="message"  placeholder="Type your message here ..... " className={styles.messageInput}/>
        {/* for submit */}
        <button type="submit"  className={styles.contactBtn}>Submit</button>



    </form>
    </div>
  )
}
export default Contactform;