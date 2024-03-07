import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/navBar/NavBar.jsx'
import Footer from './components/footer/Footer.jsx'
import { Home, Projects} from './pages'

function App() {
  return (
    <div className='text-white bg-code'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
