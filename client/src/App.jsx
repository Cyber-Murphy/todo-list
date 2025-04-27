import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Body from './components/body'
import CreateTodo from './components/CreateTodo'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <BrowserRouter basename='/'>
      <Routes>
      <Route path='/' element={<Body/>}>
      <Route path='/' element ={<CreateTodo/>}/>
        
      </Route>

      </Routes>
    </BrowserRouter>
     </>
  )
}

export default App
