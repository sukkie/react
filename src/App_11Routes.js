import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact={true} element={<HomePage />} />
        <Route path="/login/:id" exact={true} element={<LoginPage />} />
      </Routes>
      <Routes></Routes>
      <Footer />
    </div>
  );
};

export default App;
