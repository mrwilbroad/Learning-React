import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import ReducersComponent from './components/ReductTutorial/ReducersComponent';
import CakeComponent from './components/ReductTutorial/CakeComponent';

const  App =() =>{

  return (
    <Routes>
        <Route path='/' element={<HomeComponent/>}/>

        <Route path='/reducer-component' element={<ReducersComponent/>}>
              <Route  index element={<CakeComponent/>}/>
        </Route>
        
    </Routes>
  );
}

export default App;
