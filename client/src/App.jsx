import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Layout/Home'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
