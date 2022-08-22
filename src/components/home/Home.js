import React from 'react';

const Home = (props) => {
  console.log(props);

  // 구조분할 할당
  // props안의 값중에 알아서 boars가 할당 됨
  const { boards, setBoards, number, setNumber } = props;

  return (
    <div>
      <h1>홈 : {number}</h1>
      <button onClick={() => setNumber(number + 1)}>번호증가</button>
      <button onClick={() => setBoards([])}>전체삭제</button>
      {boards.map((board) => (
        <h3>
          {board.title}, {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
