import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './layouts/Navbar'

import Home from './pages/Home/Home';
import General from './pages/General/General';
import Cataloging from './pages/Cataloging/Cataloging';

function App() {
  return (
    <Router basename='/Sistema-CD-342'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/geral' element={<General />} />
        <Route path='/catalogar' element={<Cataloging />} />
      </Routes>
    </Router>
  );
}

export default App;
