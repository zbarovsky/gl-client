import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import './index.css';

function App() {
  return (
    <div>
      <Navbar />

    <div>
      <Switch>
        <Route path='/' exact component={ Home } />
        {/* <Route path='/gallery' exact component={ Gallery } />
        <Route path='/shop' exact component={ Shop }/>
        <Route path='/cart' exact component={ Cart }/> */}
      </Switch> 
    </div>

      <Footer />
    </div>
  );
}

export default App;
