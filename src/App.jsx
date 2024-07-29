import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/contact/contact";
import { Hero } from "./components/hero/hero";
import { Navbar } from './components/navbar/Navbar'
import { Project } from "./components/projects/project";
import { Skill } from './components/skills/skill'

function App() {
  return(  
    <div className={styles.App}>
 <Navbar />
 <Hero />
 <About />
<Skill />
<Project />
<Contact />
  </div>
  )
}

export default App
