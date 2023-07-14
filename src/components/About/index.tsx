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
          &emsp;&emsp;Iniciei minha jornada profissional trabalhando em grandes hospitais de Brasília, onde tive a oportunidade de trabalhar diretamente com a equipe da Philips na migração de sistemas de um hospital, neste período atuei no treinamento das equipes, e na alimentação de dados do sistema.
          <br/><br/>
          &emsp;&emsp;Com esta experiência me apaixonei pela área tecnológica. Atualmente possuo conhecimento em desenvolvimento Web e na área de dados. 
          <br/><br/>
          &emsp;&emsp;Tenho como foco atual buscar conhecimentos para me desenvolver como analista de dados, sendo assim estou cursando Análise e Desenvolvimento de Sistemas onde tenho contato diário com Power BI e Python. Também busco sempre realizar cursos para poder me aperfeiçoar.

          </p>
        </Fade>
      </div>  
  )
}

