import styles from './MenuBack.module.css'

//React Router Dom	
import { Link } from "react-router-dom"	

//React Reveal para animações de exibição
import {Fade} from 'react-reveal';

export const MenuBack = () => {
  return (
    <>
      <Fade>
        <nav className={styles.menu_back}>
            <Link to={`/`}>          
            <span className="material-symbols-outlined">arrow_back</span>
            </Link> 
        </nav>
      </Fade>
    </>
  )
}
