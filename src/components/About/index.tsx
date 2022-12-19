import styles from './About.module.css';

//React Reveal para animações de exibição
import Fade from 'react-reveal';

export const About = () => {
  return (
    <div className={styles.about} id="about">
      <div className={styles.about_items}>
        <Fade left>
          <h1>Sobre</h1>
        </Fade>

        <Fade right>
          <p>Especializado em solucionar problemas e entusiasta de novas tecnologias, atualmente possuo foco em desenvolvimento em web com React.

          Possuo facilidade em aprender coisas novas, o que facilitou adquirir conhecimento sobre novas linguagens com o dia a dia, superando mudanças e desafios.
          </p>
        </Fade>
        </div>  
    </div>
  )
}

