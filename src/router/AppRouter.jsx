import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import About from '../pages/about/About'
import Details from '../pages/details/Details'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import PrivateRouter from './PrivateRouter'

const AppRouter = () => {
  return (

    <Router>
        <Navbar/>
        <Routes>
            
            <Route path="/" element={<Login/>} />
            

            <Route path="home" element={<PrivateRouter/>}>
                <Route path="" element={<Home/>} />
            </Route>

            <Route path="/about" element={<PrivateRouter/>} >
                <Route path="/about" element={<About/>} />
            </Route>
            
            <Route path="/details" element={<Details/>} />



        </Routes>
        <Footer/>
    </Router>  )
}

export default AppRouter