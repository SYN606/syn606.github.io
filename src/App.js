import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage'
import { HelmetProvider } from "react-helmet-async";
import SchemaMarkup from './components/SchemaMarkup'
import './css/global.css'
import './css/media_queries.css'



const App = () => {
  return (
    <>
      <SchemaMarkup />
      <HelmetProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </>
  );
};

export default App;

