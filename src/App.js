import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import About from './components/About'
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import './index.css';

function App() {
  return (
    <div>
      <Navbar />

      {/* <Switch>
        <Route path='/gallery' exact component={ Gallery } />
        <Route path='/shop' exact component={ Shop }/>
        <Route path='/cart' exact component={ Cart }/>
      </Switch> */}

      <div>
        <Logo />
        <h1>Welcome to Dr. Ques' Art Gallery and Store</h1>
        <About />
      </div>

      <Footer />
    </div>
  );
}

export default App;
