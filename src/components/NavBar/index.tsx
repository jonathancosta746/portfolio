import styles from './NavBar.module.css';

export const NavBar = () => {


  return (
    <nav className={styles.menu}>
        <a href='/#' className={styles.navbar_a}>Inicio</a>
        <a href='/#about' className={styles.navbar_a}>Sobre</a>
        <a href='/#works' className={styles.navbar_a}>Experiência</a>
        <a href='/#technologies' className={styles.navbar_a}>Tecnologias</a>
        <a href='/#degree' className={styles.navbar_a}>Certificados</a>
        <a href='/#about' className={styles.navbar_a}>Portfolio</a>
        <a href='/#contact' className={styles.navbar_a}>Contato</a>
    </nav>
  )
}
