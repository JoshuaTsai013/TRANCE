import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home'
import About from './pages/About'
import Music from './pages/Music'
import Model from './pages/Model'
// import Shop from './pages/Shop'

function App() {

  const {currentUser} = useContext(AuthContext)
  console.log(currentUser)
  
  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<About />} />
            <Route path="/Music" element={<Music />} />
            {/* <Route path="/Shop" element={<Shop />} /> */}
            <Route path="/Model" element={<Model />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
