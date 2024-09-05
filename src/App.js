import './index.css';
import Navbar from './components/Navbar';
import Home from './Home';
import Shop from './Shop';
import Single from './Single';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/Home' Component={Home}></Route>
          <Route path='/Shop' Component={Shop}></Route>
          <Route path='/Single' Component={Single}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
