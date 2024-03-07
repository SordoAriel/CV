import { Project, RedirectBtn } from "../components/index.js"

function Projects () {
    const projects = [
        {
            img:'assets/DWCourseImg.png',
            title: 'Front-End - Landing Site',
            description: `Este es el Proyecto Final del Curso de Desarrollo Web de CoderHouse, donde aprendimos a realizar un sitio web estático que fuera responsive.
            Realizamos un primer maquetado con Balsamiq
            Luego, a nivel código, estructuramos el HTML, y le dimos forma, primero a través de CSS, y luego incorporamos Bootsrap y el preprocesador de SASS.
            Trabajamos a partir de buenas prácticas: nesting de los elementos del CSS, buen uso de las etiquetas semánticas, creación de una página de Error 404, etc.
            Importamos recursos externos, como videos y mapas
            Realizamos animaciones a través de CSS
            Finalmente, subimos la página a través de un proveedor de dominio gratuitos (en este caso, GitHubPages)`,
            techs: ['HTML', 'CSS', 'Bootstrap', 'SASS'],
            redirectionLinks: {
                github: {
                    to: 'GitHub',
                    link: 'https://github.com/SordoAriel/Curso_de_DesarrolloWeb_and_JavaScript/'
                },
                page: {
                    to: 'Ver página',
                    link: 'https://sordoariel.github.io/Curso_de_DesarrolloWeb_and_JavaScript/'
                }
            }
        },
        {
            img: 'assets/ReactCourseImg.png',
            title: 'Front-End - Ecommerce',
            description: `Este proyecto fue creado en el marco del curso de React.JS que realicé en CoderHouse.
            El objetivo principal era aprender y aplicar los fundamentos de React.
            Tomamos como modelo la construcción de una API REST.
            Para llevar a cabo el proyecto, trabajamos en el entorno provisto por Node.JS.
            Levantamos la aplicación con create-react-app.
            Aplicamos la sintaxis recomendada por la página oficial de React, JSX.
            La navegabilidad fue trabajada a través de rutas, con el módulo react-router-dom, y tomando los parámetros de las rutas.`,
            techs: ['React'],
            redirectionLinks: {
                github: { 
                    to: 'GitHub',
                    link: 'https://github.com/SordoAriel/Curso_de_ReactJS'
                },
                page: {
                    to: 'Ver página',
                    link: 'https://ferreteriaferrosreact.vercel.app/'
                }
            }
        },
        {
            img: 'assets/pexels-tuur-tisseghem-812264-removebg-preview.png',
            title: 'Back-End - Ecommerce',
            description: `Este es el proyecto desarrollado a lo largo del Curso de Desarrollo Backend de CoderHouse.
            Utilizamos el entorno de NodeJS, y para la construcción del servidor, aplicamos el framework de Express.JS.
            El servidor está diagramado según el modelo API REST.
            Asimismo, se utilizó una arquitectura por capas para la organización interna del servidor.
            Para la creación de las vistas, el requisito del curso era la utilización del motor de plantillas Handlebars, sin la necesidad de incorporar estilados.
            El servicio de almacenamiento utilizado fue MongoDB.
            Para el manejo de sesiones, utilicé el método de express de sessions. La autenticación de los usuarios se realiza mediante Passport, con el cual se incluye también un método de autenticación por terceros mediante Google.
            Aplicamos mailing para enviar notificaciones a los usuarios. Se incluye la utilización de JsonWebToken para la caducidad del mail de cambio de contraseña.
            También llevé a cabo diferentes tests unitarios, utilizando Mocha y Chai, y tests de integración, estos últimos con la librería Supertest.
            Se documentó el servidor utilizando Swagger.
            Finalmente, realicé el deploy de nuestro servidor a través de railway.app`,
            techs: ['Node.JS', 'Express.JS', 'MongoDB', 'Handlebars', 'Passport', 'Mocha', 'Chai', 'Supertest'],
            redirectionLinks: {
                github: {
                    to: 'GitHub',
                    link: 'https://github.com/SordoAriel/Curso_de_Backend'
                },
            }
        },
        {
            img: 'assets/PortfolioImg.png',
            title: 'Portfolio',
            description: `En este sitio en el que encuentran, intenté ir un poco más allá de lo aprendido a lo largo del curso.
            Utilicé React, pero en esta ocasión lo ejecuté a través de Vite.
            También incorporé como librería de CSS a Tailwind.
            Fui riguroso y prolijo, poniendo en juego todas las buenas prácticas que quizás en otros proyectos, con la voragine del curso y las entregas, no había alcanzado a aplicar.
            `,
            techs: ['React', 'Tailwind'],
            redirectionLinks: {
                github: {
                    to: 'GitHub',
                    link: 'https://github.com/SordoAriel/CV', 
                }
                
            }
        }
    ]

    return (
        <div className='px-20 py-10'>
            <h1 className='text-2xl font-bold pb-10'>Mis proyectos:</h1>
            <div className='w-full flex flex-col gap-3 justify-center items-center'>
                {projects.map(({img, title, description, techs, redirectionLinks}) => 
                    <Project img={img} title={title} description={description} techs={techs} redirectionLinks={redirectionLinks} />
                )}
            </div>  
        </div>
    )
}

export default Projects
