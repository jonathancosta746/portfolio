import styles from './Call.module.css';

import HomeImage from '../../assets/HomeImage.png'
import HomeVideo from '../../assets/HomeVideo.mp4'

//React Reveal para animações de exibição
import {Fade, Zoom} from 'react-reveal';
import { Menu } from '../Menu';


import { Link } from 'react-scroll';

export const Header = () => {
  return (
    <header id="start">
      <Menu/>
      <video 
        autoPlay={true} 
        loop={true}
        controls={false} 
        playsInline
        muted 
        src={HomeVideo}
        className={styles.video}>
      </video>
      
      <Fade duration={5000}>
       <img src={HomeImage} alt="Jonathan Costa" className={styles.logo_image}></img>
      </Fade>

      <Zoom duration={2000}>
     
        <div className={styles.cross}>
          <Link to='portfolio' spy={true} smooth={true} offset={0} duration={500} >
          <div className={styles.cross_one}>
            <span className="material-symbols-outlined">expand_more</span>
          </div>
          <div className={styles.cross_two}>
            <span className="material-symbols-outlined">expand_more</span>
          </div>  
          </Link>      
        </div>
      </Zoom>
    </header>
  )
}
