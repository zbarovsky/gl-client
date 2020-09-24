import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* <Switch>
        <Route path='/gallery' exact component={ Gallery } />
        <Route path='/shop' exact component={ Shop }/>
        <Route path='/cart' exact component={ Cart }/>
      </Switch> */}

      <div>
        <h1>Welcome to Dr. Ques' Art Gallery and Store</h1>
      </div>

      <Footer />
    </div>
  );
}

export default App;
