import { Routes, Route } from "react-router";
import Home from './pages/Home.tsx';

export default function App(){
  return(
    <>
     <Routes>
      <Route index element={<Home/>} />
     </Routes>
      
    </>
  )
}
