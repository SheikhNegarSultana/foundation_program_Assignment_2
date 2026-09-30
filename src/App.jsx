import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Components/HomePage'
import MoviePage from './Components/MoviePage'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' 
               element={<HomePage></HomePage>}>
        </Route>

        <Route path='/movies'
               element={<MoviePage></MoviePage>} >

        </Route>
      </Routes>
    </BrowserRouter>

    </>
      
             
  )
}

export default App
