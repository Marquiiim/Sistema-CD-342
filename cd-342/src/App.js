import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './layouts/Navbar'

import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route pathname='/' element={<Home />} />
        <Route path='/geral' element={null} />
        <Route path='/catalogar' element={null} />
      </Routes>
    </Router>
  );
}

export default App;
