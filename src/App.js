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
import CardsByIncome from './components/core/CardIncom/CardsByIncome';
import CardsByPrivilege from './components/core/CardByPrivilege/CardsByPrivilege';
import ProtectedRoute from './components/common/ProtectedRoute';
import CardForm from './components/admin/card'
import RewardForm from './components/admin/Reward';
import EligibilityForm from './components/admin/Eligibility';
import HowToApplyForm from './components/admin/Apply';
import BenefitsForm from './components/admin/Benefits';
import CardFeesForm from './components/admin/Charges';
import AffilaitedDisclosure from './components/common/Disclosure';
import DisclaimerPage from './components/common/Disclaimer';
import PrivacyPolicy from './components/common/PrivacyPolicy';
import TermOfService from './components/common/TermsOfService';

function App() {
  return (
    <div className='font-dm'>

      <Navbar />

      <Routes>
        
        <Route path='/' element={<Home />} />

        <Route path='/more-cards' element={<Page_2 />} />

        <Route path='/fulldetailsofcard/:id' element={<FullDetailsOfCard/>}/>

        <Route path='/cardComparison/:id' element={<CompareCard/>}/> 

        <Route path='/cardByNetwork' element={<CardNetwork/>}/>

        <Route path='/cardByIncome' element={<CardIncome/>}/>

        <Route path='/cardByPrivilege' element={<CardByPrivilege/>}/>

        <Route path='/cardByNetwork/:name/:id' element={<CardsByNetwork/>}/>

        <Route path='/cardByBank/:name/:id' element={<CardsByBank/>}/>

        <Route path='/cardByIncome/:name/:id' element={<CardsByIncome/>}/>

        <Route path='/:name/:id' element={<CardsByPrivilege/>}/>

        <Route path='/disclouser' element={<AffilaitedDisclosure/>}/>

        <Route path='/disclaimer' element={<DisclaimerPage/>}/>

        <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>

        <Route path='/termsofservice' element={<TermOfService/>}/>

        <Route path='/addCard' element={<ProtectedRoute element={CardForm} />} />

        <Route path='/addReward' element={<ProtectedRoute element={RewardForm} />} />

        <Route path='/addEligibility' element={<ProtectedRoute element={EligibilityForm} />} />

        <Route path='/addHowToApply' element={<ProtectedRoute element={HowToApplyForm} />} />

        <Route path='/addBenefits' element={<ProtectedRoute element={BenefitsForm} />} />

        <Route path='/addCharges' element={<ProtectedRoute element={CardFeesForm} />} />
        
      </Routes>

    </div>
  );
}

export default App;
