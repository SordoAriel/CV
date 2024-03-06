import { Link } from 'react-router-dom'

function NavBar () {
    return (
        <nav className='h-10 flex justify-between align-middle'>
            <div className='w-1/5 flex justify-evenly align-middle'>
                <Link to='/' className='flex items-center hover:animate-pulse'>Acerca de mi</Link>
                <Link to='/projects' className='flex items-center hover:animate-pulse'>Proyectos</Link>
            </div>
        </nav>
    )
}

export default NavBar
