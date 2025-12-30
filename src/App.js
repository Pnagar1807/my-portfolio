import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import Debug from './Debug';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Debug/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="*" element={<Home/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;