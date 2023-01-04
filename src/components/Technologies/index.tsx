import styles from './Technologies.module.css'
import LogoStyledComponents from '../../assets/styled-components-logo.png'
import LogoAPIRestFull from '../../assets/Logo_API_RESTFUL.png'

//React Reveal para animações de exibição
import {Fade} from 'react-reveal';

export const Tecnologies = () => {
  return (
    <div id="technologies" className={styles.technologies} >
        <Fade>
          <h1>Tecnologias</h1>
        </Fade>
        <Fade>
          <div className={styles.technologies_content}>
            <div className={styles.technologies_item}>
              <i className="devicon-react-original colored"></i>
              <p>ReactJs/Native</p>
            </div>
            <div>
              <i className="devicon-typescript-plain colored"></i>
              <p>TypeScript</p>
            </div>
            <div>
              <i className="devicon-javascript-plain colored"></i>
              <p>JavaScript</p>
            </div>
            <div>
              <img src={LogoStyledComponents} alt="styled-components-logo" className={styles.technologies_img} />  
              <p>Styled-Components</p>
            </div>
            <div>
              <i className="devicon-sass-original colored"></i>
              <p>Sass</p>
            </div>
            <div>
              <i className="devicon-materialui-plain colored"></i>
              <p>Material UI</p>
            </div>
            <div>
              <i className="devicon-mysql-plain-wordmark"></i>
              <p>MySQL</p>
            </div>
            <div>
              <i className="devicon-nodejs-plain colored"></i>
              <p>Node.Js</p>
            </div>
            <div>
              <img src={LogoAPIRestFull} alt="API Restful-logo" className={styles.technologies_img} /> 
              <p>API RESTful</p>
            </div>
            <div>
              <i className="devicon-git-plain colored"></i>
              <p>Git</p>
            </div>      
            <div>
              <i className="devicon-photoshop-line colored"></i>
              <p>Photoshop</p>
            </div>      
            <div>
              <i className="devicon-figma-plain colored"></i>
              <p>Figma</p>
            </div>      
          </div>
        </Fade >
                        
    </div>
  )
}
