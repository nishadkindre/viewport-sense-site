import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Docs from './pages/Docs';
import Demo from './pages/Demo'; // Using the existing Demo component
import Examples from './pages/Examples';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="demo" element={<Demo />} />
            <Route path="docs" element={<Docs />} />
            <Route path="examples" element={<Examples />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
