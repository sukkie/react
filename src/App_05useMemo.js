import React, { useMemo, useState } from 'react';

// use로 시작하는것은 리액트 hooks라이브러리
// userMemo => 메모이제이션(memoization)

const App = () => {
  const [list, setList] = useState([1, 2, 3, 4]);
  const [str, setStr] = useState('합계');

  const getAddResult = () => {
    let sum = 0;
    list.forEach((i) => (sum = sum + i));
    console.log(sum);
    return sum;
  };

  // list만(str은 제외) 변경되었을때 재랜더링 하라는 의미
  const addResult = useMemo(() => getAddResult(), [list]);

  return (
    <div>
      <button
        onClick={() => {
          setStr('aaa');
        }}
      >
        문자변경
      </button>
      <button
        onClick={() => {
          setList([...list, 10]);
        }}
      >
        리스트값 추가
      </button>
      {list.map((m) => (
        <h1>{m}</h1>
      ))}
      <div>
        {str} : {addResult}
      </div>
    </div>
  );
};

export default App;
