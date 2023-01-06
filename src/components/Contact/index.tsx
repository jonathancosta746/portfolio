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
                        <a href="https://www.linkedin.com/in/jonathansantos-costa/" target="_blank" rel="noreferrer noopener">
                            <button className={styles.appointment_button_linkedin}>LinkedIn</button>
                        </a>
                        <a href="https://github.com/jonathancosta746" target="_blank" rel="noreferrer noopener">
                            <button className={styles.appointment_button_github}>GitHub</button>
                        </a>
                        <a href="https://www.youtube.com/@JonathanCosta746/" target="_blank" rel="noreferrer noopener">
                            <button className={styles.appointment_button_youtube}>Youtube</button>
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
