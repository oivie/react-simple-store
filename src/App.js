
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Main from './Main';
import Home from './Home';
import About from './About';



function App() {

  return (
      <Router>
        <nav>
          <Link to='/about' className='link' >About</Link>
          <Link to='/home' className='link'  >Home</Link>
          <Link to='/' className='link' >Shop</Link>
        </nav>

        <Routes>
          <Route path='/about' element={ <About />} />
          <Route path='/home' element={ <Home />} />
          <Route path='/' element={ <Main />} />
        </Routes>
      </Router>

  );
}

export default App;
