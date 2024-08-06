import  { useState } from 'react';
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import "@fontsource/margarine";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false); //bydefault false because we want to close the image icon close for the window > 830px
    return (
        <nav className={styles.Navbar}>
            <a className={styles.headTitle} href="/" >SANDIP</a>

            <div className={styles.menu}>
                <img className={styles.menubtn}
                    src={menuOpen ?  getImageUrl("nav/closeIcon.png"):getImageUrl("nav/menuIcon.png")}  
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                     />    
                   {/* if menuOpen = false then the styles after the "&&" will not be applied and if menopen is true then the style after the && will be applied */}
                <ul className={`${styles.menuItem} ${menuOpen && styles.menuOpen}`}
                onClick={() => setMenuOpen(false)}   //whenever a unOdered list is clicked then automatically the list will be closed
                >     
                    <li className={styles.listItem1}>
                        <a href="#about">About</a>
                    </li>
                    <li className={styles.listItem2}>
                        <a href="#skill">skill</a>
                    </li>
                    <li className={styles.listItem3}>
                        <a href="#projects">Projects</a>
                    </li>
                    <li className={styles.listItem4}>
                        <a href="#Contact">Contact</a>
                    </li>
                </ul>
            </div>

        </nav>
    )
}
