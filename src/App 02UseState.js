import { useState } from 'react';
import './App.css';

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
  console.log('App 실행');

  let sample = [
    { id: 1, name: 'aaa' },
    { id: 2, name: 'bbb' },
    { id: 3, name: 'ccc' },
    { id: 4, name: 'ddd' },
  ];

  const [users, setUsers] = useState(sample);

  const download = () => {
    // let sample = [
    //   { id: 1, name: 'aaa' },
    //   { id: 2, name: 'bbb' },
    //   { id: 3, name: 'ccc' },
    //   { id: 4, name: 'ddd' },
    // ];

    // 레퍼런스가 변경되어야 App가 다시 싫행됨.
    // setUsers(sample); // 재렌더링 되지 않음
    setUsers([...sample]); // 재렌더링 되됨
  };

  // 랜더링 시점 = 상태값 변경
  return (
    <div>
      <button onClick={download}>다운로드</button>
      {users.map((o) => (
        <h1>
          {o.id}, {o.name}
        </h1>
      ))}
    </div>
  );
}

export default App;
