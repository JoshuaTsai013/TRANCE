import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Music from './pages/Music'
import Model from './pages/Model'
import Sign from './pages/Sign'

function App() {
  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<About />} />
            <Route path="/Music" element={<Music />} />
           <Route path="/Sign" element={<Sign />} />
            <Route path="/Model" element={<Model />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
