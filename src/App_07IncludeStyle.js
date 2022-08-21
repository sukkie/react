import React from 'react';

// 자바스크립트안에 정적인 스타일 코드가 들어간 형태 - 비추
const a = { backgroundColor: 'red' };

const App = () => {
  return <div style={a}>레드</div>;
};

export default App;
