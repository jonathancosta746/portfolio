import styles from './About.module.css';

//React Reveal para animações de exibição
import Fade from 'react-reveal';

export const About = () => {
  return (
    <div className={styles.about} id="about">
        <Fade>
          <h1>Sobre</h1>
        </Fade>

        <Fade>
          <p>Olá,

          Sou um desenvolvedor web especializado e entusiasta de novas tecnologias, com foco atual em desenvolvimento web com React. Tenho uma paixão por resolver problemas, principalmente aqueles que envolvem tecnologia, e procuro constantemente estar atualizado com as tendências e novas linguagens.
   
          Estou sempre em busca de desafios e novas oportunidades para crescer como profissional e aprender coisas novas.
            
          Sou uma pessoa que aprende facilmente, e isso me permitiu adquirir conhecimento sobre novas tecnologias com facilidade, e acredito que minha experiência me permite fornecer soluções personalizadas e de alta qualidade para diferentes setores.
          </p>
        </Fade>
      </div>  
  )
}

