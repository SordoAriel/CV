import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer () {
    return (
        <div className='h-10 flex justify-between items-center text-xs'>
            <div className='px-20'>
                <span className=''>Diseño y Desarrollo: Ariel Alejandro Sordo, Marzo de 2024</span>
                <br></br>
                <p className="inline">Curriculum en constante actualización</p>
                <span class="animate-pulse">/</span>
            </div>
            <div className='w-1/4 flex justify-evenly'>
                <a href='https://www.linkedin.com/in/ariel-sordo-570a16248' target='_blank'><FontAwesomeIcon icon={faLinkedin} className='size-8 hover:animate-pulse'/></a>
                <a href='https://github.com/SordoAriel' target='_blank'><FontAwesomeIcon icon={faGithub} className='size-8 hover:animate-pulse'/></a>
            </div>
            
        </div>
    )
}

export default Footer
