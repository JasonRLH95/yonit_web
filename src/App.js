import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import images from './data/images';
import articles from './data/articles';
import social from './data/social';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar images={images} social={social}/>
        <Routes>
          <Route path='/' element={<Home images={images} articles={articles}/>}/>
        </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;
