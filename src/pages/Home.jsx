import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessRook } from '@fortawesome/free-solid-svg-icons'
import cvImg from '../assets/foto_cv.jpg'

function Home () {
    return <div className='bg-cellPhone xl:bg-computer bg-no-repeat bg-top'>
                <div className='pt-20 xl:p-14 text-center text-base xl:text-lg leading-10 font-bold'>               
                    <img src={cvImg} className='w-3/5 sm:w-1/5 lg:w-1/6 mx-auto xl:ml-8 rounded-full lg:absolute lg:right-14 lg:top-24'/>
                    <h1>¡Hola!</h1>
                    <h2>Mi nombre es Ariel Sordo</h2>
                    <h2>Soy Desarrollador Web</h2> 
                    <h2 className='inline'>¡Bienvenidos a mi portfolio!</h2>
                    <span className='animate-pulse'>_</span>
                </div>
                <div className='pt-96 xl:pt-52 px-6 xl:px-20'>
                    <h2 className='text-xl xl:text-2xl font-bold pb-5'>Acerca de mi:</h2>
                    <div className='flex flex-col justify-center items-center gap-8'>
                        <div className='xl:w-3/4 p-6 bg-sky-900 bg-opacity-40 rounded border'>
                            <h3 className='text-xl font-bold'>Donde estoy parado:</h3>
                            <p>Desde agosto de 2022 decidí dar el salto y comencé a formarme en el campo de la programación.</p>
                            <p>Durante febrero del 2024 finalicé un curso de Desarrollo Full-Stack de un año de duración en CoderHouse, el cual tenía una impronta fuertemente práctica, con la elaboración de un Proyecto Final y múltiples entregas parciales.</p>
                            <p>Me entusiasma mucho la posibilidad de introducirme en el campo IT</p>
                            <p>Actualmente continúo perfeccionando los proyectos allí desarrollados, mientras amplío mi conocimiento mediante cursos y busco trabajo para adquirir la experiencia propia de un entorno laboral </p>
                        </div>
                        <div className='w-full xl:w-3/4 p-6 bg-sky-900 bg-opacity-40 rounded border'>
                            <h3 className='text-xl font-bold'>Hacia dónde voy:</h3>
                            <p>A mediano y largo plazo, quisiera especializarme en el Desarrollo BackEnd, y la Ciberseguridad</p> 
                        </div>
                        <div className='w-full xl:w-3/4 p-6 bg-sky-900 bg-opacity-40 rounded border'>
                            <h3 className='text-xl font-bold'>De dónde vengo:</h3>
                            <p>A lo largo de mi vida me he desempeñado laboralmente en el ámbito de la Salud Pública, y del Comercio.</p>
                            <p>Desde el año 2019 trabajo como Psicólogo Clínico en Sistema Público de Salud de la Provincia de Buenos Aires. Allí desarrollé múltiples habilidades blandas, como la capacidad para trabajar en equipo, comunicarme adecuadamente, ser empático.</p>
                            <p>Entre el año 2010 y 2017 me desempeñé como empleado en un comercio familiar, donde realicé tareas de atención al público, facturación, inventariado y planificación de compras, entre otros.</p>
                        </div>
                        <div className='w-full xl:w-3/4 flex flex-col xl:flex-row justify-around gap-8 mb-8'>
                            <div className='xl:w-2/6 p-6 bg-sky-900 bg-opacity-40 rounded border'>
                                <h3 className='text-xl font-bold'>Lenguajes:</h3>
                                    <ul>
                                        <li><FontAwesomeIcon icon={faChessRook} /> HTML5</li>
                                        <li><FontAwesomeIcon icon={faChessRook} /> CSS3</li>
                                        <li><FontAwesomeIcon icon={faChessRook} /> JavaScript</li>
                                        <li><FontAwesomeIcon icon={faChessRook} /> JSX</li>
                                    </ul>
                            </div>
                            <div className='xl:w-2/6 p-6 bg-sky-900 bg-opacity-40 rounded border'>
                                <h3 className='text-xl font-bold'>Tecnologías:</h3>
                                    <ul>
                                        <li><FontAwesomeIcon icon={faChessRook} /> Node.JS</li>
                                        <li><FontAwesomeIcon icon={faChessRook} /> Express.JS</li>
                                        <li><FontAwesomeIcon icon={faChessRook} /> React</li>
                                        <li><FontAwesomeIcon icon={faChessRook} /> Bootstrap</li>
                                        <li><FontAwesomeIcon icon={faChessRook} /> Git & GitHub</li>
                                        <li><FontAwesomeIcon icon={faChessRook} /> WebSocket</li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
}

export default Home