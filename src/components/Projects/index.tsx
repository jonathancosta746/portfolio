import styles from './Projects.module.css'

import ProjectMarioImg from '../../assets/mariobros_project.png'
import ProjectRealStateImg from '../../assets/realstate_project.png'
import ProjectNetflixCloneImg from '../../assets/netflix_project.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

export const Projects = () => {
  return (
    <Swiper
        slidesPerView={3}
        spaceBetween= {32}
        freeMode={true}
        pagination={{clickable: true,}}
        modules={[FreeMode, Pagination]}
        grabCursor={true}
  
        

        className="mySwiper"
      >
        <div className={styles.project_container}>
            <h1>Projetos</h1>
                <div >
                        <div className="swiper-wrapper">
                            <SwiperSlide>
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
                            </SwiperSlide>

                            <SwiperSlide>
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
                            </SwiperSlide>

                            <SwiperSlide>
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
                            </SwiperSlide>

                            <SwiperSlide>
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
                            </SwiperSlide>
                        </div>
                </div>
        </div>
    </Swiper>

  )
}