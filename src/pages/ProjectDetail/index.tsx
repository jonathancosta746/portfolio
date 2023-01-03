//styles
import styles from './Portfolio.module.css'

//hooks
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../components/ContextData/DataContext";

import { Portfolio } from '../../components/Portfolio';
import { Footer } from '../../components/Footer';


type Project = {
  id: string;
  name: string;
  static_img: string;
  description_img: string;
  short_description: string;
  full_description: string;
  link_web:string;
  link_github: string;
  link_youtube: string;
  children?: React.ReactNode;
}

export const ProjectDetail = () => {
  const {id}:any = useParams();

  const project = useContext<Project[]>(DataContext)
  const name = project[id].name;
  const description_img = project[id].description_img;
  const full_description = project[id].full_description;
  /*
  let link_web = project[id].link_web;
  let link_github = project[id].link_github;
  let link_youtube = project[id].link_youtube;
  */
 
  return (
    <div className={styles.project_detail}>
      <h1>{name}</h1>

      <img src={description_img} alt="Imagem do Projeto" className={styles.project_img}/>

      <p>{full_description}</p>
    
      <Portfolio />
      <Footer />
    </div>
  )
}