import { useState } from 'react';
import './App.css';
import Sub from './Sub';

// 0. React엔진 - 데이터 변경 감지해서 UI그려줌
// 1. 실행과정
// 2. JSX문법
// 3. 바벨 ES6 => ES5로 변환

// (1) 리턴시에 하나의 DOM만 리턴할 수 있다
// (2) 변수선언은 let, cosnt만 사용
// (3) if연산 사용불가, 3항연산 사용가능
// (4) 조건부 렌더링 (조건 && 값)
// (5) css디자인
// - 내부에 적는 방법
// - 외부파일에 적는 방법
// - 라이브러리 사용(부트스트랩, component-styled)

function App() {
  // let number = 1;
  const [number, setNumber] = useState(1); // React안에 hooks라이브러리 사용
  const add = () => {
    setNumber(number + 1); // 리액트한테 넘버값 변경하라고 요청
    console.log(number);
  };

  // 랜더링 시점 = 상태값 변경
  return (
    <div>
      <h1>숫자 : {number}</h1>
      <button onClick={add}>더하기</button>
      <Sub></Sub>
    </div>
  );
}

export default App;
