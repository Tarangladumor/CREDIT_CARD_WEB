import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Page_2 from './Pages/Page_2';
import Navbar from './components/common/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>

      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/more-cards' element={<Page_2 />} />
      </Routes>


    </div>
  );
}

export default App;
