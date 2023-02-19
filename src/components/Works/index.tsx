import styles from './Works.module.css'

import workPhilips from '../../assets/images/works/workPhilips.png'
import workDuoSynchro from '../../assets/images/works/workDuoSynchro.png'

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
            <img src={workDuoSynchro} alt="Philips" className={styles.work_img}/>
          </div>
        </Fade>  

        <Fade>
          <div className={styles.work_detail}>
            <h2>Duo Synchro Investimentos</h2>
            <p>Desenvolvedor</p>
            <p>Atuação na criação de Screener para localização e monitoramento automático de ações na bolsa de valores nas características desejadas pelos investidores.</p>
          </div>
        </Fade>
      </div>
  
      <div className={styles.work_item}>
        <Fade>
          <div className={styles.work_image}>
            <img src={workPhilips} alt="Philips" className={styles.work_img}/>
          </div>
        </Fade>

        <Fade>
          <div className={styles.work_detail}>
            <h2>Philips</h2>
            <p>Consultor de Implementação</p>
            <p>Atuação no treinamento das equipes dos hospitais da rede Opty em Brasília durante a migração de sistemas para o sistema Tasy HTML e Java. Também atuando na alimentação de dados do sistema conforme necessário e adaptação da UI para o hospital.
            </p>
          </div>  
        </Fade> 
      </div>  
    </div>
  )
}
