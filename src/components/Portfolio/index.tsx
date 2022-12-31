import styles from './Portfolio.module.css'

//React Reveal para animações de exibição
import {Fade} from 'react-reveal';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

//hooks
import { useContext } from "react";
import { DataContext } from "../../components/ContextData/DataContext";

//React Router Dom
import { Link } from "react-router-dom"


type Project = {
    id: string;
    name: string;
    static_img: string;
    short_description: string;
    full_description: string;
    link_web:string;
    link_github: string;
    link_youtube: string;
}

export const Portfolio = () => {
   

  const projects = useContext<Project[]>(DataContext)

  return (
    <div className={styles.project} id="portfolio">
        <Fade left>
            <h1>Portfolio</h1>
        </Fade>          


        <div className={styles.project_item}>      
            <Fade right>
                <div>
                    <Swiper
                        slidesPerView={1.12}
                        spaceBetween= {15}
                        pagination={{clickable: true,}}
                        modules={[FreeMode, Pagination]}
                        
                        className="mySwiper"
                    >
                        <div>
                            <div className="swiper-wrapper">
                            <ul>
                                {projects?.map(projetos => {
                                    return (
                                        <li key={projetos.id}>
                                            <SwiperSlide>
                                                <article className={styles.project_card}>
                                                    <img src={projetos.static_img} alt="Imagem do Projeto" className={styles.project_img} />
                                                    <div className={styles.project_data}>
                                                        <h2 className={styles.project_title}>
                                                            {projetos.name}
                                                        </h2>
                                                        <h3 className={styles.project_description}>
                                                            {projetos.short_description}
                                                        </h3>
                                                        <div className={styles.project_btn}>
                                                            <a href={projetos.link_web} target="_blank" rel="noopener noreferrer">
                                                                <button className={styles.btn_web}><i className='bx bx-world'></i>Acesse</button>
                                                            </a>

                                                            <Link to={`/project/${projetos.id}/info`}>
                                                                <button className={styles.btn_github}><i className='bx bxl-github'></i>Info</button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </article>
                                            </SwiperSlide>
                                        </li>
                                    )
                                })}     
                            </ul>   
                            </div>
                        </div>
                    </Swiper>
                </div>
            </Fade> 
        </div>    
    </div>
  )
}