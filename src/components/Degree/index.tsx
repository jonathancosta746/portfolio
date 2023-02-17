import styles from './Degree.module.css';

import LogoEstacio from '../../assets/estacio-logo.png'
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
        <h1>Formação e Certificados</h1>
      </Fade>

      <div className={styles.degree_item}>
        <Fade >
          <div className={styles.degree_image}>
            <img src={LogoEstacio} alt="Logo Faculdade Estácio" className={styles.degree_img}/>
          </div>
        </Fade>

        <Fade>
          <div className={styles.degree_detail}>
            <h2>Análise e Desenvolvimento de Sistemas</h2>
            <p>Universidade Estácio - 2023/2024</p>
          </div>
        </Fade> 
      </div>

      <span></span>

      <div className={styles.degree_item}>
        <Fade >
          <div className={styles.degree_image}>
            <img src={LogoOrangeTech} alt="Logo OrangeTech" className={styles.degree_img}/>
          </div>
        </Fade>

        <Fade>
          <div className={styles.degree_detail}>
            <h2>BootCamp Orange Tech+ (JavaScript, TypeScript, e React.Js)</h2>
            <p>Banco Inter - 2022</p>
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
            <p>Udemy - 2022</p>
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
            <p>Udemy - 2022</p>
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
            <p>Dio - Digital Innovation One Inc. - 2022</p>
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
            <p>Dio - Digital Innovation One Inc. - 2022</p>
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
            <p>Fundação Bradesco - 2022</p>
          </div>
        </Fade> 
      </div>  
    </div>
  )
}
