import './App.css';
import Home from './Pages/Home';
import Page_2 from './Pages/Page_2';
import Navbar from './components/common/Navbar';
import { Route, Routes } from 'react-router-dom';
import FullDetailsOfCard from './Pages/FullDetailsOfCard';
import CompareCard from './Pages/CompareCard';
import CardNetwork from './Pages/CardNetwork';
import CardIncome from './Pages/CardIncom';
import CardsByNetwork from './components/core/CardNetwork/CardsByNetwork';
import CardsByBank from './components/core/CardsByBank/CardsByBank';
import CardByPrivilege from './Pages/CardByPrivilege';

function App() {
  return (
    <div>

      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/more-cards' element={<Page_2 />} />

        <Route path='/fulldetailsofcard/:id' element={<FullDetailsOfCard/>}/>

        <Route path='/cardComparison' element={<CompareCard/>}/> 

        <Route path='/cardByNetwork' element={<CardNetwork/>}/>

        <Route path='/cardByIncome' element={<CardIncome/>}/>

        <Route path='/cardByPrivilege' element={<CardByPrivilege/>}/>

        <Route path='/cardByNetwork/:name/:id' element={<CardsByNetwork/>}/>

        <Route path='/cardByBank/:name/:id' element={<CardsByBank/>}/>
        
      </Routes>


    </div>
  );
}

export default App;
