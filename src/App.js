import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
// import { MyContext } from './context/MyContext';

import OnboardingPage from './pages/OnboardingPage/OnboardingPage';
import LoginPage from './pages/LoginPage/LoginPage';
// import RegisterPage from '';
// import ProfilePage from '';
import ProfileAlergicPage from './pages/ProfileAlergicPage/ProfileAlergicPage';
// import ProfileEmergencyPage from '';
import ProfileAlergicConfirmPage from './pages/ProfileAlergicConfirmPage/ProfileAlergicConfirmPage';
import ProfileEndPage from './pages/ProfileEndPage/ProfileEndPage';
// import ScanPage from '';
// import EvaluatePage from '';
// import ScanResultPage from '';
import HomePage from './pages/HomePage/HomePage';
// import DiaryPage from '';




function App() {

  // const {t, i18n} = useTranslation(['translation']);

  // const changeLanguaje = (code) => {
  //   i18n.changeLanguage(code);
  // }
  // const [number2, setNumber2] = useState(0)
  // const [number, setNumber] = useState(2000)
 
  // let location = useLocation();
  // console.log(location.pathname);

  return (
    <>
    {/* <MyContext.Provider value={{ activeUser, setActiveUser, discon }}> */}
      <Router>
        <div className="app">
          <Routes>
              {/* el / es el bienvenido y el menú con el slides */}
              <Route path="/" element={<OnboardingPage></OnboardingPage>}/>
              <Route path="/login" element={<LoginPage></LoginPage>}/>
              {/* <Route path="/register" element={<RegisterPage></RegisterPage>}/>
              <Route path="/profile" element={<ProfilePage></ProfilePage>}/> */}
              {/* <Route path="/profile/emergency" element={<ProfileEmergencyPage></ProfileEmergencyPage>}/> */}
              <Route path="/profile/alergics" element={<ProfileAlergicPage></ProfileAlergicPage>}/>
              <Route path="/profile/alergics/confirm" element={<ProfileAlergicConfirmPage></ProfileAlergicConfirmPage>}/>
              <Route path="/profile/end" element={<ProfileEndPage></ProfileEndPage>}/>
              {/* <Route path="/scan" element={<ScanPage></ScanPage>}/>
              <Route path="/evaluate" element={<EvaluatePage></EvaluatePage>}/>
              <Route path="/scan/result" element={<ScanResultPage></ScanResultPage>}/> */}
              <Route path="/home" element={<HomePage></HomePage>}/>
              {/* <Route path="/diary" element={<DiaryPage></DiaryPage>}/> */}

          </Routes>
        </div>
      </Router>
    {/* </MyContext.Provider> */}
    </>
  );
}

export default App;