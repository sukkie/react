import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Login from '../components/login/Login';

const LoginPage = () => {
  let { id } = useParams();
  let navigate = useNavigate();

  console.log('LoginPage : ' + id);
  console.log(navigate);
  return (
    <div>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <Login></Login>
    </div>
  );
};

export default LoginPage;
