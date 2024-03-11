import { Link } from 'react-router-dom'

function NavBar () {
    return (
        <nav className='sticky top-0 backdrop-blur-xl h-14 flex z-20'>
            <div className='xl:w-1/5 w-full flex justify-evenly align-middle'>
                <Link to='/' className='flex items-center hover:animate-pulse'>Acerca de mi</Link>
                <Link to='/projects' className='flex items-center hover:animate-pulse'>Proyectos</Link>
            </div>
        </nav>
    )
}

export default NavBar
