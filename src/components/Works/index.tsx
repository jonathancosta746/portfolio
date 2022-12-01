import styles from './Works.module.css'

import WorkPhilips from '../../assets/workPhilips.png'
import WorkDuoSynchro from '../../assets/workDuoSynchro.png'


export const Works = () => {
  return (
    <div id="works" className={styles.works}>
        <h1>Experiência</h1>
          <div className={styles.work_image}>
            <img src={WorkDuoSynchro} alt="Philips" className={styles.work_img_greyhound}/>
          </div>

          <div className={styles.work_detail_greyhound}>
            <h2>Duo Synchro Investimentos</h2>
                <p>Atuação na criação de Screener para localização e monitoramento automático de ações na bolsa de valores nas características desejadas pelos investidores.</p>
          </div>
      
          <div className={styles.work_image}>
            <img src={WorkPhilips} alt="Philips" className={styles.work_img_philips}/>
          </div>

          <div className={styles.work_detail_philips}>
            <h2>Philips</h2>
                <p>Realizava o treinamento das equipes dos hospitais da rede Opty em Brasília durante a migração de sistemas para o sistema Tasy HTML e Java. Também atuando na alimentação de dados do sistema conforme necessário e adaptação da UI para o hospital.
                </p>
          </div>       
    </div>
  )
}
