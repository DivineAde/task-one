import './App.css';
import Home from './pages/Home';
import Error from './pages/Error';
import {  Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;