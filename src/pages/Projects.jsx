import DWCourseImg from '../assets/DWCourseImg.png'
import ReactCourseImg from '../assets/ReactCourseImg.png'
import PortfolioImg from '../assets/PortfolioImg.png'
import AmplifyImg from '../assets/amplifyImg.png'
import FinWishImg from '../assets/finWishImg.png'
import dbImg from '../assets/dbImg.png'
import Carousel from "../components/Carousel.jsx"

function Projects () {
    const projects = [
        {
            img: AmplifyImg,
            title: 'Amplify',
            description: `Producto de mi segunda simulación con la gente de NoCountry, a lo largo de 5 semanas creamos Amplify, el MVP de una plataforma web de música diseñada para que cualquier persona pueda compartir y descubrir música con facilidad. Aunque está orientada a músicos amateurs, cualquier usuario puede cargar su música y acceder a una extensa biblioteca de canciones.
            Allí me desempeñé en el rol de Desarrollador Back-end, donde junto a mis compañeros creamos una API que consta de 4 colecciones, necesarias para el correcto funcionamiento de la app.
            A nivel tecnologías, esta experiencia me sirvió para afianzar conocimientos de TypeScript. En cuanto a mis softskills, significó una maravillosa oportunidad de probarme en un entorno cuasi-laboral. 
            ¡El proyecto quedó seleccionado entre los 6 mejores del período y fue presentado en el DemoDay al finalizar la simulación!
            `,
            techs: ['NodeJs', 'ExpressJs', 'MongoDB', 'Cloudinary', 'TypeScript', 'GitHub'],
            redirectionLinks: {
                github: {
                    to: 'GitHub',
                    link: 'https://github.com/SordoAriel/Amplify', 
                }                
            }
        },
        {
            img: FinWishImg,
            title: 'FinWish - Online Bank',
            description: `Durante mi primera simulación laboral en No Country, emprendimos la creación de FinWish, una banca online que en su versión inicial permita realizar transferencias entre diferentes usuarios al interior de la misma aplicación.
            Más allá del MVP, la app tendría el potencial de poder realizar ingresos de dinero, pagos y utilización de tarjetas.
            En este proyecto estuve en el backend. Fue sumamente desafiante, ya que, a la complejidad que supone una primera experiencia de trabajo con otros, y la dificultad intrínsica del rubro fin tech, se añadió las sucesivas deserciones en el área back-end, por lo cual, de 5 desarrolladores que eramos inicialmente, quedamos 2. 
            Aquí pude consolidar conocimientos previos y hacer una primera aproximación a la programación con TypeScript, a la vez que aprendí a utilizar GitHub en proyectos compartidos.
            `,
            techs: ['NodeJs', 'ExpressJs', 'MongoDB', 'TypeScript', 'GitHub'],
            redirectionLinks: {
                github: {
                    to: 'GitHub',
                    link: 'https://github.com/No-Country-simulation/c17-13-t-node-react', 
                }
                
            }
        },
        {
            img: dbImg,
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
            techs: ['NodeJs', 'ExpressJs', 'MongoDB', 'Handlebars', 'Passport', 'Mocha', 'Chai', 'Supertest'],
            redirectionLinks: {
                github: {
                    to: 'GitHub',
                    link: 'https://github.com/SordoAriel/Curso_de_Backend'
                },
            }
        },
        {
            img: ReactCourseImg,
            title: 'Front-End - Ecommerce',
            description: `Este proyecto fue creado en el marco del curso de React.JS que realicé en CoderHouse.
            El objetivo principal era aprender y aplicar los fundamentos de React.
            Tomamos como modelo la construcción de una API REST.
            Para llevar a cabo el proyecto, trabajamos en el entorno provisto por Node.JS.
            Levantamos la aplicación con create-react-app.
            Aplicamos la sintaxis recomendada por la página oficial de React, JSX.
            La navegabilidad fue trabajada a través de rutas, con el módulo react-router-dom, y tomando los parámetros de las rutas.`,
            techs: ['React', 'JavaSript'],
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
            img: DWCourseImg,
            title: 'Front-End - Sitio Web',
            description: `Este es el resultado final de los cursos de Desarrollo Web y programación JavaScript de CoderHouse.
            Era requisito que tuviese al menos 4 páginas, que fuera responsive y que estuviese articulada la logica para que se pudiese finalizar una compra.
            Realizamos un primer maquetado con Balsamiq.
            Luego, a nivel código, estructuramos el HTML, y le dimos forma, primero a través de CSS, y luego incorporamos Bootsrap y el preprocesador de SASS.
            Trabajamos a partir de buenas prácticas: nesting de los elementos del CSS, buen uso de las etiquetas semánticas, creación de una página de Error 404, etc.
            Importamos recursos externos, como videos y mapas.
            Realizamos animaciones a través de CSS.
            Dí mis primeros pasos en la programación propiamente dicha, aplicando los métodos más importantes de JavaScript y manipulando el DOM.
            Finalmente, subimos la página a través de un proveedor de dominio gratuitos (en este caso, GitHubPages)`,
            techs: ['HTML', 'CSS', 'Bootstrap', 'SASS', 'JavaScript'],
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
            img: PortfolioImg,
            title: 'Portfolio',
            description: `En este sitio en el que se encuentran, intenté no utilizar plantilla alguna, e ir un poco más allá de lo aprendido a lo largo del curso.
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
        <div className='px-10 py-10'>
            <h1 className='text-2xl font-bold pb-10'>Mis proyectos:</h1>
            <Carousel items={projects} />
        </div>
    );
}

export default Projects;