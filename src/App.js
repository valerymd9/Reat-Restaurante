import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

import { broserRouter as Router, Switch, router, link } from 'react-router-dom';

function App() {
    return ( <div className = "App" >
        <header >
        <Header/>
        </header> 
        <footer >
        <div className = "page-container" >
        <div className = "content-wrap" >
        <h1 > BIENVENIDOS A D´ Gusto </h1> 
        </div> 
        <Footer/>
        </div> 
        </footer> 
        </div>


    );
}

export default App;