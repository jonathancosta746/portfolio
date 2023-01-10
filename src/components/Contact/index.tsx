import styles from './Contact.module.css';

//React Reveal para animações de exibição
import Fade from 'react-reveal';

export const Contact = () => {
  return (
    <div id='contact' className={styles.contact}>
        <Fade>
            <h1>Contato</h1>
        </Fade>    
            
        <Fade>
            <div className={styles.contact_container}>
                <div className={styles.contact_info}>
                    <h2>Envie uma mensagem<span>.</span></h2>
                    <p>Mande uma mensagem que entrarei em contato o mais breve possivel.</p>
                    <div>
                        <a href="mailto:jonathancosta746@gmail.com">
                            <div className={styles.contact_item}>
                                <i className='bx bx-envelope'></i>
                                <p>jonathancosta746@gmail.com</p>
                            </div>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=5561995377732" target="_blank" rel="noreferrer noopener">
                            <div className={styles.contact_item}>
                                <i className='bx bxl-whatsapp' ></i>
                                <p>+55 61 99537-732</p>
                            </div>
                        </a>
                    </div>
                    
                </div>

                <form action="https://formspree.io/f/" method="POST" className={styles.contact_form}>
                    <div className={styles.form_group}>
                        <input type="text" placeholder="Nome" name="Nome do Cliente" id="name" required></input>
                    </div>

                    <div className={styles.form_group}>
                        <input type="number" placeholder="Telefone" name="Telefone do Cliente" id="number" required></input>
                    </div>

                    <div className={styles.form_group}>
                        <input type="email" placeholder="Email" name="Email do Cliente" id="number" required></input>
                    </div>

                    <div className={styles.form_group}>
                        <textarea name="Mensagem do Cliente" id="message" rows={5} placeholder="Adicione uma mensagem" required></textarea>
                    </div>
                    <input type="submit" value="Enviar Mensagem" className={styles.btn_send}></input>
                </form>
            </div>
            </Fade>    
    </div>
  )
}
