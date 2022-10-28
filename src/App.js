import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import Add from './Components/Add';
import Edit from './Components/Edit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<Add />} />
          <Route path='/edit' element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
