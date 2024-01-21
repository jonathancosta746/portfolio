import styles from './Works.module.css'

import workPhilips from '../../assets/images/works/workOpty.jpeg'
import workDuoSynchro from '../../assets/images/works/workDuoSynchro.png'
import workControladoria from '../../assets/images/works/workCGDF.jpeg'

//React Reveal para animações de exibição
import {Fade} from 'react-reveal';

export const Works = () => {
  return (
    <div id="work" className={styles.work}>
      <Fade>
        <h1>Experiência</h1>
      </Fade>
      
      
      <div className={styles.work_item}>
        <Fade>
          <div className={styles.work_image}>
            <img src={workControladoria} alt="Controladoria-Geral do DF" className={styles.work_img}/>
          </div>
        </Fade>  

        <Fade>
          <div className={styles.work_detail}>
            <h2>Controladoria-Geral do DF</h2>
            <p>- Analista de Dados</p>
          </div>
        </Fade>

        <Fade>
          <div className={styles.work_info}>
            <p>
              • Desenvolvimentos e manutenção de dashboards e relatórios para auditoria das contas publicas dos órgãos do GDF com Microsoft Power BI (linguagem DAX e M para desenvolvimento de métricas e outros tratamentos no modelo de dados)
                <br/>
              • Banco de dados relacional (SQL)
                <br/>
              • Excel 
                <br/>
              • Utilização de Data Warehouse
                <br/>
              • Análise de dados
                <br/>
              • Tratamentos e modelagem de dados
                <br/>
              • Processos ETL
            </p>
          </div>
        </Fade>
      </div>

      <div className={styles.work_item}>
        <Fade>
          <div className={styles.work_image}>
            <img src={workDuoSynchro} alt="Synchro" className={styles.work_img}/>
          </div>
        </Fade>  

        <Fade>
          <div className={styles.work_detail}>
            <h2>Synchro Investimentos</h2>
            <p>- Analista de Dados</p>
          </div>
        </Fade>

        <Fade>
          <div className={styles.work_info}>
            <p>
              • Criação de scripts para localização e monitoramento automático de ativos financeiros nas características desejadas pelos investidores
              <br/>
              • Excel
              <br/>
              • Metodologia SCRUM
            </p>
          </div>
        </Fade>
      </div>
  
      <div className={styles.work_item}>
        <Fade>
          <div className={styles.work_image}>
            <img src={workPhilips} alt="Opty - Hospitais Oftalmológicos" className={styles.work_img}/>
          </div>
        </Fade>

        <Fade>
          <div className={styles.work_detail}>
            <h2>Opty - Hospitais Oftalmológicos</h2>
            <p>- Consultor de Implantação</p>
          </div>  
        </Fade> 

        <Fade>
          <div className={styles.work_info}>
            <p>
              • Treinamento de equipes dos hospitais da rede para utilização do sistema Tasy
                <br/>
              • Adaptação de UI para as necessidades dos hospitais
                <br/>
              • Metodologia SCRUM
            </p>
          </div>
        </Fade>
      </div>  
    </div>
  )
}
