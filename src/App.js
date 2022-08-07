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
let a = 10;

const mystyle = {
  color: 'red',
};

function App() {
  let b = 20;
  return (
    <div>
      <div style={mystyle}>안녕{a === 10 ? '10입니다' : '10이 아닙니다.'}</div>
      <h1 className="box-style">해당태그{b}</h1>
      <hr />
    </div>
  );
}

export default App;
