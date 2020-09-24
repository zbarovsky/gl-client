import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from'./components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* <Switch>
        <Route path='/' exact component={ Home } />
        <Route path='/gallery' exact component={ Gallery } />
        <Route path='/shop' exact component={ Shop }/>
        <Route path='/cart' exact component={ Cart }/>
      </Switch> */}

      <div>
        <h1>test</h1>
      </div>
    </div>
  );
}

export default App;
