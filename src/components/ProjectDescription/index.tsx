//styles
import styles from './ProjectDescription.module.css'

//React Reveal para animações de exibição
import {Fade} from 'react-reveal';

//hooks
import { useContext } from "react";
import { DataContext } from "../../context/ContextData/DataContext";

//React Router Dom	
import { useParams } from "react-router-dom";

type Project = {
  id: string;
  name: string;
  static_img: string;
  description_img: string;
  short_description: string;
  full_description: string;
  link_web:string;
  link_github: string;
  show_github: boolean;
  link_youtube: string;
  show_youtube: boolean;
  technologies: Array<string>;
  children?: React.ReactNode;
}

export const ProjectDescription = () => {
  const {id}:any = useParams();

  const project = useContext<Project[]>(DataContext)
  const name = project[id].name;
  const description_img = project[id].description_img;
  const full_description = project[id].full_description;
  const link_web = project[id].link_web;
  const show_github = project[id].show_github;
  const link_github = project[id].link_github;
  const show_youtube = project[id].show_youtube;
  const link_youtube = project[id].link_youtube;
  const technologies = project[id].technologies;
 
 
  return (
    <div className={styles.project_detail}>
        <Fade>
        <h1>{name}</h1>

        <Fade ssrReveal>
        <div className={styles.project_img}>
          <img src={description_img} alt="Imagem do Projeto"/>
        </div>
        </Fade>

        <div className={styles.project_text}>
          <p>{full_description}</p>



          {/*video do projeto*/}
          {show_youtube && 
            <div className={styles.video}>
              <iframe src={link_youtube} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
          }


          {/*Lista de tecnologias e Ferramentas do Projeto*/}
          <ul className={styles.technologies_list}>
            {technologies?.map((technologies, index) => {
              return (
                <li key={index}>
                  {technologies} 
                </li>
              )
            })}     
          </ul> 

          <span className={styles.divider}></span>



          {/*Botões para acessar o projeto e o github do mesmo*/}
          <div className={styles.project_btn}>
            <a href={link_web} target="_blank" rel="noopener noreferrer">
                <button className={styles.btn_web}><i className='bx bx-world'></i>Acesse</button>
            </a>

           
            {show_github && 
             <a href={link_github} target="_blank" rel="noopener noreferrer">
              <button className={styles.btn_github}><i className='bx bxl-github'></i>GitHub</button>
            </a>
            }
          </div>

          <h2>Outros projetos<span>.</span></h2>
        </div>
        </Fade>
    </div>
  )
}