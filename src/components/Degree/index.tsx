import styles from './Degree.module.css';

import LogoDio from '../../assets/dio_logo.png';
import LogoUdemy from '../../assets/Udemy-logo.png';
import LogoBradesco from '../../assets/logo-fundacao-bradesco.png';
import LogoOrangeTech from '../../assets/orangeTech.png';

//React Reveal para animações de exibição
import {Fade} from 'react-reveal';

export const Degree = () => {
  return (
    <div id="degree" className={styles.degree}>
      <Fade>
        <h1>Certificados</h1>
      </Fade>

      <div className={styles.degree_item}>
        <Fade >
          <div className={styles.degree_image}>
            <img src={LogoOrangeTech} alt="Logo OrangeTech" className={styles.degree_img}/>
          </div>
        </Fade>

        <Fade>
          <div className={styles.degree_detail}>
            <h2>BootCamp Orange Tech+ (JavaScript, TypeScript, e React.Js)</h2>
            <p>Banco Inter</p>
          </div>
        </Fade> 
      </div>


      <div className={styles.degree_item}>
        <Fade>
          <div className={styles.degree_image}>
            <img src={LogoUdemy} alt="Logo Udemy" className={styles.degree_img}/>
          </div>
        </Fade> 
      
        <Fade>
          <div className={styles.degree_detail}>
            <h2>TypeScript do Básico ao Avançado</h2>
            <p>Udemy</p>
          </div>
        </Fade> 
      </div>

      <div className={styles.degree_item}>
        <Fade>
          <div className={styles.degree_image}>
            <img src={LogoUdemy} alt="Logo Udemy" className={styles.degree_img}/>
          </div>
        </Fade>

        <Fade>
          <div className={styles.degree_detail}>
            <h2>React do Zero a Maestria (c/ hooks, router, API, Projetos)</h2>
            <p>Udemy</p>
          </div>
        </Fade> 
      </div>


      <div className={styles.degree_item}>
        <Fade>
          <div className={styles.degree_image}>
            <img src={LogoDio} alt="Logo Dio" className={styles.degree_img}/>
          </div>
        </Fade>

        <Fade>
          <div className={styles.degree_detail}>
            <h2>Desenvolvimento com JavaScript ES6</h2>
            <p>Dio - Digital Innovation One Inc.</p>
          </div>
        </Fade>  
      </div>


      <div className={styles.degree_item}>
        <Fade>
          <div className={styles.degree_image}>
            <img src={LogoDio} alt="Logo Dio" className={styles.degree_img}/>
          </div>
        </Fade>

        <Fade>
          <div className={styles.degree_detail}>
            <h2>Responsividade e Experiência do Usuário - UX/UI</h2>
            <p>Dio - Digital Innovation One Inc.</p>
          </div>
        </Fade>
      </div>


      <div className={styles.degree_item}>
        <Fade>
          <div className={styles.degree_image}>
            <img src={LogoBradesco} alt="Logo Fundação Bradesco" className={styles.degree_img}/>
          </div>
        </Fade> 
        
        <Fade>
          <div className={styles.degree_detail}>
            <h2>Desenvolvimento em HTML.</h2>
            <p>Fundação Bradesco</p>
          </div>
        </Fade> 
      </div>  
    </div>
  )
}
