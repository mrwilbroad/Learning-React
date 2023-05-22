import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import ReducersComponent from './components/ReductTutorial/ReducersComponent';
import CakeComponent from './components/ReductTutorial/CakeComponent';
import FormikHome from './components/FormikTutorial/FormikHome';
import NewYoutubeForm from './components/FormikTutorial/NewYoutubeForm';
import OldYoutubeForm from './components/FormikTutorial/OldYoutubeForm';
import ComplexYoutubeForm from './components/FormikTutorial/ComplexYoutubeForm';
import MultistepRegistration from './components/MultistepRegistration/MultistepRegistration';
import FirstStepRegistration from './components/MultistepRegistration/FirstStepRegistration';
import SecondStepRegistration from './components/MultistepRegistration/SecondStepRegistration';
import FormikContainer from './components/FormikReusability/FormikContainer';
import ReacttableIntroduction from './components/TableTutorial/ReacttableIntroduction';



const  App =() =>{


  return (
  <Routes>
    <Route path='/' element={<HomeComponent/>}/>
          <Route path='/reducer-component' element={<ReducersComponent/>}>
              <Route  index element={<CakeComponent/>}/>
          </Route>
          
          <Route path='/Formik-Tutorial' element={<FormikHome/>}>
               <Route path = 'youtube-form' element={<NewYoutubeForm/>}/>
               <Route path = 'oldYoutube-form' element={<OldYoutubeForm/>}/>
               <Route path = 'complexyoutube-form' element={<ComplexYoutubeForm/>}/>
          </Route>

          <Route path='/Registration' element={<MultistepRegistration/>}>
               <Route path='First-Step'  element={<FirstStepRegistration/>}/>
               <Route path='Second-Step' element={<SecondStepRegistration/>}/>
          </Route>

          <Route path='formik-resulability' element={<FormikContainer/>}/>

          <Route path='table-tutorial' element={<ReacttableIntroduction/>}/>
        
    </Routes>
  );
}

export default App;
