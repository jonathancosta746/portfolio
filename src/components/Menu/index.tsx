import styles from './Menu.module.css';
import { useState, useEffect } from 'react';

//React Reveal para animações de exibição
import {Fade} from 'react-reveal';

import { Link } from 'react-scroll';

export const Menu = () => {
  //funçoes para abrir o menu
  const[active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active)
  }

  //função esconder menu no momento da rolagem do scroll
  const [menuHide, setmenuHide] = useState(false);

  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 30 ) {
        setmenuHide(true);
      }
        else {
          setmenuHide(false);
      } 
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);


  return (
    <nav className={menuHide ? `${styles.nav_hide}` : ''}>
        <div onClick={ToggleMode} className={active ? `${styles.icon} ${styles.iconActive}` : `${styles.icon}`}>
          <Fade>
            <div className={`${styles.hamburguer} ${styles.hamburguer_icon}`}></div>
          </Fade>
        </div>

      <div className={active ? `${styles.menu} ${styles.menuOpen}` : `${styles.menu} ${styles.menuClose}`}>
        <div className={styles.list}>
          <ul className={styles.listItems}>
              <Link to="start" spy={true} smooth={true} offset={0} duration={500}  className={styles.navbar_a} onClick={ToggleMode}><li>Inicio</li></Link>

              <Link to="portfolio" spy={true} smooth={true} offset={0} duration={500}  className={styles.navbar_a} onClick={ToggleMode}><li>Portfolio</li></Link>

              <Link to="about" spy={true} smooth={true} offset={0} duration={500}  onClick={ToggleMode}><li>Sobre</li></Link>

              <Link to="work" spy={true} smooth={true} offset={0} duration={500}  onClick={ToggleMode}><li>Experiência</li></Link>

              <Link to="technologies" spy={true} smooth={true} offset={0} duration={500} onClick={ToggleMode}><li>Tecnologias</li></Link>

              <Link to="degree" spy={true} smooth={true} offset={0} duration={500} onClick={ToggleMode}><li>Certificados</li></Link>

              <Link to="contact" spy={true} smooth={true} offset={0} duration={500} onClick={ToggleMode}><li>Contato</li></Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}
