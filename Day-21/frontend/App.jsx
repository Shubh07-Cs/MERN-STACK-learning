import {BrowserRouter, Routes, Route} from 'react-router'

const App=()=>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      
    </Routes>
  </BrowserRouter>
  );
};

export default App; // ESM (ES6 Modules)
// module.exports = App // CJS (Common JS Forma
