import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Page_2 from './Pages/Page_2';
import Navbar from './components/common/Navbar';
import { Route, Routes } from 'react-router-dom';
import FullDetailsOfCard from './Pages/FullDetailsOfCard';

function App() {
  return (
    <div>

      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/more-cards' element={<Page_2 />} />

        <Route path='/fulldetailsofcard' element={<FullDetailsOfCard/>}/>
      </Routes>


    </div>
  );
}

export default App;
