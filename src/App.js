import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';

const  App =() =>{

  return (
    <Routes>
        <Route path='/' element={<HomeComponent/>}/>
    </Routes>
  );
}

export default App;
