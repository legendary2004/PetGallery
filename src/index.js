import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Main from './pages/Main.tsx';
import Contact from './pages/Contact.tsx';
import About from './pages/About.tsx';
import Gallery from './pages/Gallery.tsx';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';
import LoginContextProvider from './contexts/LoginContext.tsx';
import App from './App.tsx';
import PetUpdateProvider from './contexts/petUpdate.tsx';
import PetSearchContextProvider from './contexts/SearchPetContext.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LoginContextProvider>
    <PetUpdateProvider>
      <PetSearchContextProvider>
        <App />
      </PetSearchContextProvider>
    </PetUpdateProvider>
  </LoginContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
