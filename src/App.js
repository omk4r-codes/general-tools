import './App.css';
import Home from './Components/Home';
import Navb from './Components/Navb';
import Texttools from './Components/Texttools';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navb/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/texttools' element={<Texttools/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
