import styles from './Projects.module.css'

//React Reveal para animações de exibição
import {Fade} from 'react-reveal';

import ProjectMarioImg from '../../assets/mariobros_project.png'
import ProjectRealStateImg from '../../assets/realstate_project.png'
import ProjectNetflixCloneImg from '../../assets/netflix_project.png'
import ProjectSecretWordImg from '../../assets/secretword_project.png'
import ProjectHospitalLandingPageImg from '../../assets/landingpageHospital_project.png'

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
    <div className={styles.project} id="portfolio">
        <Fade left>
            <h1>Portfolio</h1>
        </Fade>

    <div className={styles.project_item}>      
            <Fade right>
            <div>
                <Swiper
                    slidesPerView={1.2}
                    spaceBetween= {15}
                    pagination={{clickable: true,}}
                    modules={[FreeMode, Pagination]}
                    
                    className="mySwiper"
                >
                    <div>
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
                                            <a href="/#">
                                                <button className={styles.btn_github}><i className='bx bxl-github'></i>GitHub</button>
                                            </a>

                                            <a href="/#">
                                                <button className={styles.btn_web}><i className='bx bx-world'></i>Acesse</button>
                                            </a>
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
                                    <img src={ProjectSecretWordImg} alt="Logo do Projeto" className={styles.project_img} />
                                    <div className={styles.project_data}>
                                        <h2 className={styles.project_title}>
                                            Secret Word Game
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
                                    <img src={ProjectHospitalLandingPageImg} alt="Logo do Projeto" className={styles.project_img} />
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
                </Swiper>
            </div>
            </Fade> 

        </div>    
    </div>
  )
}