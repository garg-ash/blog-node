import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element = {<App />}></Route>
  </Routes>
  </BrowserRouter>
)
