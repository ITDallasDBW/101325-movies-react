import logo from './logo.svg';
import React from 'react';
import './App.css';
import logoPic from './assets/movieLogo.1.png';
import titlePic from './assets/wtmShowtime.3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Main />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
