import React, {useState} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Gallery from './components/Gallery'
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import './index.css';

function App() {

  let galleries = [
    {img: <img src='https://www.placecage.com/c/400/400'/>, desc: 'crazy cage doin his thing'},
    {img: <img src='https://www.placecage.com/c/400/400'/>, desc: 'crazy cage doin his thing'},
    {img: <img src='https://www.placecage.com/c/400/400'/>, desc: 'crazy cage doin his thing'},
    {img: <img src='https://www.placecage.com/c/400/400'/>, desc: 'crazy cage doin his thing'}
  ]

  const [gallery, setGallery] = useState(galleries)

  return (
    <div>
      <Navbar />
    <div>
      <Switch>
        <Route path='/' exact component={ Home } />
        <Route path='/gallery' render={() => <Gallery gallery={gallery}/>} />
        {/*<Route path='/shop' exact component={ Shop }/>
        <Route path='/cart' exact component={ Cart }/> */}
      </Switch> 
    </div>
      <Footer />
    </div>
  );
}

export default App;
