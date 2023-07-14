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
            <h2>Synchro Investimentos</h2>
            <p>Analista de Dados</p>
            <p>Atuei na criação de Screener(localizador) para localização e monitoramento automático de ativos financeiros nas características desejadas pelos investidores, onde o script os notificava sobre quais ativos estavam nas características desejadas, fazendo assim com que pudessem ganhar tempo focando apenas nos ativos que estavam na característica esperada.</p>
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
            <p>Consultor de Implantação</p>
            <p>Realizava o treinamento das equipes dos hospitais da rede Opty(HOB) em Brasília durante a migração de sistemas para o sistema Tasy HTML e Tasy Java. Recebendo as críticas e sugestões dos funcionários de cada hospital e as tratando e filtrando para os desenvolvedores tomarem as devidas providências. Também atuei na alimentação de dados do sistema conforme necessário e adaptação da UI para o hospital.
            </p>
          </div>  
        </Fade> 
      </div>  
    </div>
  )
}
