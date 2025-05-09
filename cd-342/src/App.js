import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './layouts/Navbar'

import Home from './pages/Home/Home';
import General from './pages/General/General';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/geral' element={<General />} />
        <Route path='/catalogar' element={null} />
      </Routes>
    </Router>
  );
}

export default App;
