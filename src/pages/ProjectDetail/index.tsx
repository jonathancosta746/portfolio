//styles
import styles from './Portfolio.module.css'

//components
import { Projects } from '../../components/Projects';
import { Footer } from '../../components/Footer';
import { MenuBack } from '../../components/MenuBack';
import { ScrollUp } from '../../components/ScrollUp';
import { ProjectDescription } from '../../components/ProjectDescription';

export const ProjectDetail = () => { 
  return (
    <div className={styles.project_detail}>
      <MenuBack />
      <ScrollUp />
      <ProjectDescription />
      <Projects />
      <Footer />
    </div>
  )
}