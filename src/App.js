import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState(0);

  const [search, setSearch] = useState(0);

  const download = () => {
    // 가정 다운로드를 받고(통신)
    let downloadData = 5;
    setData(downloadData);
  };

  // 실행시점
  // 1. App() 함수가 최초 실행될 때(그림이 그려질 때)
  // 2. 상태 변수가 변경될 때(2번째 인수로 온오프 할 수 있음)
  useEffect(() => {
    console.log('useEffect 실행됨');
    download();
  }, [search]); // 2번째 인수인 배열에 아무것도 넣지 않으면 최초 한번만 실행됨
  // }, [data]);  // 상태변수인 data를 넣어주면 data가 변경될때 마다 실행됨

  return (
    <div>
      <button
        onClick={() => {
          setSearch(2);
        }}
      >
        검색하기
      </button>
      <h1>데이터 : {data}</h1>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        더하기
      </button>
    </div>
  );
};

export default App;
