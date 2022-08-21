import React from 'react';
import LoginPage from './pages/LoginPage';

// // 아래와 같은 상태
// // 별도의 js파일로 쓸 수 있음.
// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;

// var t = document.createElement('h1');
// t.style = {
//   fontSize: '1.5em',
//   textAlign: 'center',
//   color: 'red',
// };

const App = () => {
  return (
    <div>
      <LoginPage />
    </div>
  );
};

export default App;
