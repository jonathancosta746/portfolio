import styles from './Projects.module.css'

import ProjectMarioImg from '../../assets/mariobros_project.png'
import ProjectRealStateImg from '../../assets/realstate_project.png'
import ProjectNetflixCloneImg from '../../assets/netflix_project.png'

export const Projects = () => {
  return (
    <div className={styles.project_container}>
    <h1>Projetos</h1>
    <div >
            <div className="swiper-wrapper">

                <article className={styles.project_card}>
                    <img src={ProjectMarioImg} alt="Logo do Projeto" className={styles.project_img} />
                    <div className={styles.project_data}>
                        <h2 className={styles.project_title}>
                            Super Mario JavaScript Game
                        </h2>
                        <h3 className={styles.project_description}>
                            Jogo criado utilizando JavaScript e DOM para manupulação de classes do CSS
                        </h3>
                        <div className={styles.project_btn}>
                            <button className={styles.btn_github}>GitHub</button>
                            <button className={styles.btn_web}>Acesse</button>
                        </div>
                    </div>
                </article>

                <article className={styles.project_card}>
                    <img src={ProjectRealStateImg} alt="Logo do Projeto" className={styles.project_img} />
                    <div className={styles.project_data}>
                        <h2 className={styles.project_title}>
                            LandingPage para Imobiliaria.
                        </h2>
                        <h3 className={styles.project_description}>
                            LandigPage criada para Imobiliaria ou Corretores.
                        </h3>
                        <div className={styles.project_btn}>
                            <button className={styles.btn_github}>GitHub</button>
                            <button className={styles.btn_web}>Acesse</button>
                        </div>
                    </div>
                </article>

                <article className={styles.project_card}>
                    <img src={ProjectNetflixCloneImg} alt="Logo do Projeto" className={styles.project_img} />
                    <div className={styles.project_data}>
                        <h2 className={styles.project_title}>
                            Clone NetFlix.
                        </h2>
                        <h3 className={styles.project_description}>
                            Clone da HomePage de usuário da Netflix.
                        </h3>
                        <div className={styles.project_btn}>
                            <button className={styles.btn_github}>GitHub</button>
                            <button className={styles.btn_web}>Acesse</button>
                        </div>
                    </div>
                </article>
            </div>
    </div>
    </div>
    
  )
}