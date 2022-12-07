import styles from './NavBar.module.css';
import { useState } from 'react';

export const NavBar = () => {
  const[active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active)
  }

  return (
    <div className={styles.navBar}>
      <div className={active ? `${styles.icon} ${styles.iconActive}` : `${styles.icon}`} onClick={ToggleMode}>

        <div className={`${styles.hamburguer} ${styles.hamburguer_icon}`}></div>

      </div>

      <div className={active ? `${styles.menu} ${styles.menuOpen}` : `${styles.menu} ${styles.menuClose}`}>
        <div className={styles.list}>
          <ul className={styles.listItems}>
              <a href='/#' className={styles.navbar_a} onClick={ToggleMode}><li>Inicio</li></a>
              <a href='/#about' className={styles.navbar_a} onClick={ToggleMode}><li>Portfolio</li></a>
              <a href='/#about' className={styles.navbar_a} onClick={ToggleMode}><li>Sobre</li></a>
              <a href='/#works' className={styles.navbar_a} onClick={ToggleMode}><li>Experiência</li></a>
              <a href='/#technologies' className={styles.navbar_a} onClick={ToggleMode}><li>Tecnologias</li></a>
              <a href='/#degree' className={styles.navbar_a} onClick={ToggleMode}><li>Certificados</li></a>    
              <a href='/#contact' className={styles.navbar_a} onClick={ToggleMode}><li>Contato</li></a>
          </ul>
        </div>
      </div>
    </div>
  )
}
