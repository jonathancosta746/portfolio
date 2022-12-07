import styles from './Technologies.module.css'
import LogoStyledComponents from '../../assets/styled-components-logo.png'

export const Tecnologies = () => {
  return (
    <div id="technologies" >
        <h1 className={styles.technologies_h1}>Tecnologias</h1>
          <div className={styles.technologies}>
            <div>
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
              <i className="devicon-nodejs-plain colored"></i>
              <p>Node.Js</p>
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
                        
    </div>
  )
}