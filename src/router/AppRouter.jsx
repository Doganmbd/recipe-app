import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Login from '../pages/login/Login'

const AppRouter = () => {
  return (

    <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Login/>} />



        </Routes>
        <Footer/>
    </Router>  )
}

export default AppRouter