import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Login from '../components/login/Login';

const LoginPage = () => {
  return (
    <div>
      <Header />
      <Login></Login>
      <Footer />
    </div>
  );
};

export default LoginPage;
