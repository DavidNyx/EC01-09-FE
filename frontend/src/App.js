import {BrowserRouter as Router} from 'react-router-dom'
import Body from './components/body/Body'
import Footer from './components/footer/Footer'
import GuestPage from './pages/GuestPage';
import Pages from './pages'
import React from 'react'

function App() {
  return (
 
    <Router>
    <div className="App">
      <Pages />
      <Footer/>
    </div>
    </Router>

  );
}

export default App;
