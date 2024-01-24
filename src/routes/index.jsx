import { Routes, Route } from 'react-router-dom'
import Home from "../pages/home/Home";
const RouteController = () => {
  
  return (
    <>
      <Routes>
          <Route>
              <Route path='/' element={<Home/>}/>
          </Route>
      </Routes>
    </>
  )
}

export default RouteController