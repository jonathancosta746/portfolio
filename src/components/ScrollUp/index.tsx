import styles from './ScrollUp.module.css';

import ScrollToTop from 'react-scroll-up';

//função para subir para o inicio da pagina clicando do icone do rodapé da vizualização
export const ScrollUp = () => {
  return (
    <div className={styles.scroll}>
      <ScrollToTop showUnder={1}>
     <i className='bx bx-chevron-up'></i>
     </ScrollToTop>
    </div>
  )
}