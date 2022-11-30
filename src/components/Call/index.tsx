import styles from './Call.module.css';

import HomeImage from '../../assets/HomeImage.png'
import HomeVideo from '../../assets/HomeVideo.mp4'

export const Call = () => {
  return (
    <div className={styles.call}>
      <video autoPlay muted>
        <source src={HomeVideo} type="video/mp4" className={styles.video}></source>
      </video>
      
      <img src={HomeImage} alt="Jonathan Costa"></img>
    </div>
  )
}
