import styles from './Appointment.module.css';

export const Appointment = () => {
  return (
    <div id='contact'>
        <h1 className={styles.appointment_h1}>Contato</h1>
            <div className={styles.appointment}>
                <div className={styles.appointment_info}>
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

                <form action="https://formspree.io/f/" method="POST" className={styles.appointment_form}>
                    <div className={styles.form_group}>
                        <label htmlFor="name">Nome</label>
                        <input type="text" placeholder="Digite seu nome" name="Nome do Cliente" id="name" required></input>
                    </div>

                    <div className={styles.form_group}>
                        <label htmlFor="phone">Telefone</label>
                        <input type="number" placeholder="Digite seu telefone" name="Numero de Telefone" id="number" required></input>
                    </div>

                    <div className={styles.form_group}>
                        <label htmlFor="return">Selecione a forma de retorno</label>
                        <select name="return" required>
                            <option value="whatsApp">WhatsApp</option>
                            <option value="email">E-mail</option>
                        </select>
                    </div>


                    <div className={styles.form__group}>
                        <label htmlFor="message">Mensagem</label>
                        <textarea name="Mensagem" id="message" rows={6} placeholder="Adicione uma mensagem" required></textarea>
                    </div>
                    <input type="submit" value="Enviar Mensagem" className={styles.btn_primary}></input>
                </form>
            </div>
    </div>
  )
}
