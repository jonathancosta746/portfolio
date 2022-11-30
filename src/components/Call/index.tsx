import styles from './Call.module.css';

import HomeImage from '../../assets/HomeImage.png'
import HomeVideo from '../../assets/HomeVideo.mp4'

export const Call = () => {
  return (
    <div className={styles.call}>
      <video autoPlay muted loop>
        <source src={HomeVideo} type="video/mp4" className={styles.video}></source>
      </video>
      
      <img src={HomeImage} alt="Jonathan Costa"></img>

      <a href='#about' className={styles.cross}>
        <div className={styles.cross_one}>
          <span className="material-symbols-outlined">expand_more</span>
        </div>
        <div className={styles.cross_two}>
          <span className="material-symbols-outlined">expand_more</span>
        </div>        
      </a>
      
    </div>
  )
}
