import './App.css'
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom'
// import Header from './components/Header/Header'
// import Container from './components/Container/Container'
// import Footer from './components/Footer/Footer'
import {Container} from './components/index'
import { Header,Footer} from './sections'
import {Home,Profile} from './Pages/index'

const App=()=>{
    return(
        <>

    <Router>
        <Header />
        <Container>
            <Routes>
                <Route path='/' element={ <Home/>}/>
                <Route path='/profile' element={ <Profile/>}/>
            </Routes>
        </Container>
        <Footer/>
    </Router>

        </>
    )
}

export default App