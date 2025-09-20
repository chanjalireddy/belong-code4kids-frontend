import logo from './logo.svg';
import './App.css';
import SignupForm from './SignUp/SignupForm';
import Card from './Card/Card';
import Navbar from './Navbar/Navbar'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
  

    <Router>
       <Navbar/>

      <Routes>
          <Route path="/" element={<Home />} />

  <Route path="/about" element={<About />} />

  <Route path="/contact" element={<Contact />} /> 
      </Routes>
      </Router>
    {/* <Card/> */}

    
    {/* <SignupForm/> */}
    </>
        
  );
}

export default App;
