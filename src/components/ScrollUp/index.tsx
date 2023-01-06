import styles from './ScrollUp.module.css';

import ScrollToTop from 'react-scroll-up';

export const ScrollUp = () => {
  return (
    <div className={styles.scroll}>
      <ScrollToTop showUnder={1}>
     <i className='bx bx-chevron-up'></i>
     </ScrollToTop>
    </div>
  )
}