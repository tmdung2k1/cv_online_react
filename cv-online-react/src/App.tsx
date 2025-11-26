import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../public/scss/style.scss'
import PersonalInfo from './pages/PersonalInfo'
import MainLayout from './layouts/MainLayout'
import Projects from './pages/Projects'
import Skill  from './pages/Skill'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={<PersonalInfo/>}></Route>
            <Route path='/Projects' element={<Projects />}></Route>
            <Route path='/Skill' element={<Skill />}></Route>
            <Route path= '*' element= {<NotFound/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App