import './App.css';
import Navbar from './compount/Navbar';
import Footer from './compount/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import {MovieProvider} from './context/MovieContext.js';

function App() {
  return (
    <MovieProvider>
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />

        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
    </MovieProvider>
  );
};

export default App;
