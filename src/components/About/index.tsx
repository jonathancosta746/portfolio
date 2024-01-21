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
          <p>
          &emsp;&emsp;Sou um analista de dados apaixonado por transformar dados brutos em insights valiosos, criando painéis interativos e relatórios detalhados que auxiliam na tomada de decisões estratégicas, com uma abordagem analítica e orientada a resultados. Realizando modelagem dos dados com processos ETL e linguagem SQL para manipulação de registros em bancos de dados. 
          <br/><br/>
          </p>
        </Fade>
      </div>  
  )
}

