import styles from './NavBar.module.css';

export const NavBar = () => {


  return (
    <nav className={styles.menu}>
        <a href='/#'>Inicio</a>
        <a href='/#about'>Sobre</a>
        <a href='/#works'>Experiência</a>
        <a href='/#technologies'>Tecnologias</a>
        <a href='/#degree'>Certificados</a>
        <a href='/#about'>Portfolio</a>
        <a href='/#about'>Contato</a>
    </nav>
  )
}
