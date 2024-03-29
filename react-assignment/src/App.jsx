import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Setting from './component/Setting';
import './App.css'


function App (){
  return(
      <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/setting' element={<Setting/>}/>
      </Routes>
    </BrowserRouter>
      </>
  )
}

export default App
