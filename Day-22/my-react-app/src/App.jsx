import {BrowserRouter,Routes, Route} from "react-router";
import HomePage from "./pages/homePage";


function App(){
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      
    </Routes>
  </BrowserRouter>
  )
}


export default App;
