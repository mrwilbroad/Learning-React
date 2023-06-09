import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// /state
import { Provider } from 'react-redux';
import Applicationstore from './Redux/Applicationstore';


// Routing
import { BrowserRouter} from 'react-router-dom'

// Bootstrap js
import 'bootstrap/dist/css/bootstrap.css';

// swipper css
import 'swiper/swiper.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={Applicationstore}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
