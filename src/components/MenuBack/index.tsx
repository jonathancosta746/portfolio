import styles from './MenuBack.module.css';
import { useState } from 'react';

//React Router Dom	
import { Link } from "react-router-dom"	

//React Reveal para animações de exibição
import {Fade} from 'react-reveal';

export const MenuBack = () => {
  const[active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active)
  }

  return (
    <nav className={styles.navBar}>
        <Link to={`/`}>
          <div className={styles.iconActive} onClick={ToggleMode}>
            <Fade>
              <div className={`${styles.hamburguer} ${styles.hamburguer_icon}`}></div>
            </Fade> 
          </div>    
        </Link> 
    </nav>
  )
}
