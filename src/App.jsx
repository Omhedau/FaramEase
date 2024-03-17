import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './pages/LoginPage.jsx'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Rent from './components/Rent/rent.jsx'
import ShareResources from './components/ShareResources/ShareResources.jsx'

function App() {
 

  return (
    <div>
      {/* <LoginPage/> */}
      {/* <Navbar />
        <Home />
        <Rent /> */}
      <ShareResources/>

    </div>
  );
}

export default App
