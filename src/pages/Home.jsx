function Home (props) {
    return <div className='bg-computer bg-no-repeat bg-top'>
                <div className='p-14 text-center text-lg leading-10'>               
                    <h1>¡Hola!</h1>
                    <h2>Mi nombre es Ariel Sordo</h2>
                    <h2>Soy Desarrollador Web</h2> 
                    <h2 className='inline'>¡Bienvenidos a mi portfolio!</h2>
                    <span className='animate-pulse'>_</span>
                </div>
                <div className='pt-44 pl-20 pr-20'>
                    <h2 className='text-2xl font-bold'>Acerca de mi:</h2>
                    <div className='flex flex-col justify-center items-center gap-8'>
                        <div className='w-3/4 p-6 bg-sky-900 bg-opacity-40 rounded border'>
                            <h3 className='text-xl font-bold'>Donde estoy parado:</h3>
                            <p>Desde agosto de 2022 decidí dar el salto y comencé a formarme en el campo de la programación.</p>
                            <p>Durante febrero del 2024 finalicé un curso de Desarrollo Full-Stack de un año de duración en CoderHouse, el cual tenía una impronta fuertemente práctica, con la elaboración de un Proyecto Final y múltiples entregas parciales.</p>
                            <p>Me entusiasma mucho la posibilidad de introducirme en el campo IT</p>
                            <p>Actualmente continúo perfeccionando los proyectos allí desarrollados, mientras amplío mi conocimiento mediante cursos y busco trabajo para adquirir la experiencia propia de un entorno laboral </p>
                        </div>
                        <div className='w-3/4 p-6 bg-sky-900 bg-opacity-40 rounded border'>
                            <h3 className='text-xl font-bold'>Hacia dónde voy:</h3>
                            <p>A mediano y largo plazo, quisiera especializarme en el Desarrollo BackEnd, y la Ciberseguridad</p> 
                        </div>
                        <div className='w-3/4 p-6 bg-sky-900 bg-opacity-40 rounded border'>
                            <h3 className='text-xl font-bold'>De dónde vengo:</h3>
                            <p>A lo largo de mi vida me he desempeñado laboralmente en el ámbito de la Salud Pública, y del Comercio.</p>
                            <p>Desde el año 2019 trabajo como Psicólogo Clínico en Sistema Público de Salud de la Provincia de Buenos Aires. Allí desarrollé múltiples habilidades blandas, como la capacidad para trabajar en equipo, comunicarme adecuadamente, ser empático.</p>
                            <p>Entre el año 2010 y 2017 me desempeñé como empleado en un comercio familiar, donde realicé tareas de atención al público, facturación, inventariado y planificación de compras, entre otros.</p>
                        </div>
                        <div className='flex justify-evenly gap-8 mb-8'>
                            <div className='p-6 bg-sky-900 bg-opacity-40 rounded border'>
                                <h3>Lenguajes (por ahora):</h3>
                                    <ul>
                                        <li>HTML5</li>
                                        <li>CSS3</li>
                                        <li>JavaScript</li>
                                        <li>JSX</li>
                                    </ul>
                            </div>
                            <div className='p-6 bg-sky-900 bg-opacity-40 rounded border'>
                                <h3>Tecnologías:</h3>
                                    <ul>
                                        <li>Node.JS</li>
                                        <li>Express.JS</li>
                                        <li>React</li>
                                        <li>Bootstrap</li>
                                        <li>Git & GitHub</li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
}

export default Home