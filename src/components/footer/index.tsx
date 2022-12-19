import jonathanDevLogo from '../../assets/HomeImage.png';
import styles from './Footer.module.css';

//React Reveal para animações de exibição
import Fade from 'react-reveal';

export const Footer = () => {
  return (
    <footer>
      <Fade>
        <div className={styles.footer_container}>
          <div>
            <img src={jonathanDevLogo} alt="logo Jonathan Costa Dev" className={styles.footer_logo} />
          </div>

          <div className={styles.footer_icons}>
            <a href="https://github.com/jonathancosta746" target="_blank" rel="noreferrer noopener" className={styles.footer_icon_item}> 
              <i className='bx bxl-github'></i>
            </a>

            <a href="https://www.linkedin.com/in/jonathansantos-costa/" target="_blank" rel="noreferrer noopener" className={styles.footer_icon_item}> 
              <i className='bx bxl-linkedin-square' ></i>
            </a>

            <a href="https://www.youtube.com/@JonathanCosta746/" target="_blank" rel="noreferrer noopener" className={styles.footer_icon_item}> 
              <i className='bx bxl-youtube' ></i>
            </a>
          </div>
        </div>

        <p className={styles.footer_right}>Jonathan Costa 2022. Todos os direitos reservados.</p>
      </Fade>
    </footer>
  )
}