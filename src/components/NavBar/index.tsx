import React from 'react'
import styles from './NavBar.module.css';

export const NavBar = () => {


  return (
    <nav className={styles.menu}>
        <p>Inicio</p>
        <p>Sobre</p>
        <p>Tecnologias</p>
        <p>Portfolio</p>
        <p>Contato</p>
    </nav>
  )
}
