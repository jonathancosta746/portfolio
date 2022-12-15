import styles from './Degree.module.css';

import LogoDio from '../../assets/dio_logo.png';
import LogoUdemy from '../../assets/Udemy-logo.png';
import LogoBradesco from '../../assets/logo-fundacao-bradesco.png';
import LogoOrangeTech from '../../assets/orangeTech.png';


export const Degree = () => {
  return (
    <div id="degree" className={styles.degree}>
        <h1>Certificados</h1>

          <div className={styles.degree_item}>
            <div className={styles.degree_image}>
              <img src={LogoOrangeTech} alt="Logo OrangeTech" className={styles.degree_img}/>
            </div>
          
            <div className={styles.degree_detail}>
              <h2>BootCamp JavaScript, TypeScript, e React.Js - Orange Tech +</h2>
              <p>Udemy + Banco Inter</p>
            </div>
          </div>


          <div className={styles.degree_item}>
            <div className={styles.degree_image}>
              <img src={LogoUdemy} alt="Logo Udemy" className={styles.degree_img}/>
            </div>
          
            <div className={styles.degree_detail}>
              <h2>TypeScript do Básico ao Avançado</h2>
              <p>Udemy</p>
            </div>
          </div>


          <div className={styles.degree_item}>
            <div className={styles.degree_image}>
              <img src={LogoUdemy} alt="Logo Udemy" className={styles.degree_img}/>
            </div>
          
            <div className={styles.degree_detail}>
              <h2>React do Zero a Maestria (c/ hooks, router, API, Projetos)</h2>
              <p>Udemy</p>
            </div>
          </div>


          <div className={styles.degree_item}>
            <div className={styles.degree_image}>
              <img src={LogoDio} alt="Logo Dio" className={styles.degree_img}/>
            </div>
          
            <div className={styles.degree_detail}>
              <h2>Desenvolvimento com JavaScript ES6</h2>
              <p>Dio - Digital Innovation One Inc.</p>
            </div>
          </div>


          <div className={styles.degree_item}>
            <div className={styles.degree_image}>
              <img src={LogoDio} alt="Logo Dio" className={styles.degree_img}/>
            </div>
          
            <div className={styles.degree_detail}>
              <h2>Responsividade e Experiência do Usuário - UX/UI</h2>
              <p>Dio - Digital Innovation One Inc.</p>
            </div>
          </div>


          <div className={styles.degree_item}>
            <div className={styles.degree_image}>
              <img src={LogoBradesco} alt="Logo Fundação Bradesco" className={styles.degree_img}/>
            </div>
          
            <div className={styles.degree_detail}>
              <h2>Desenvolvimento em HTML.</h2>
              <p>Fundação Bradesco</p>
            </div>
          </div>  
    </div>
  )
}
