import { useState } from 'react'
import './App.css'
import { FormSearch } from './components/formSearch'
import {Movies} from './components/Movies'
import {Routes, Route, BrowserRouter } from 'react-router-dom'
import { MainPage } from './components/MainPage'
import { SingleMovies } from './components/SingleMovies'

// ApiKey
// https://omdbapi.com/apikey=be35e4ab&s=troya
// https://www.omdbapi.com/?apikey=be35e4ab&i=tt0052678s





function App() {


  return (
    <div className='App'>
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/movies/:id' element={<SingleMovies/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
