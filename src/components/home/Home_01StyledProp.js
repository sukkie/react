import React from 'react';
import styled from 'styled-components';

// styled를 Home함수 밖으로 뺌
const StyledDeleteButton = styled.button`
  color: ${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')};
`;

const Home = (props) => {
  console.log(props);

  // 구조분할 할당
  // props안의 값중에 알아서 boars가 할당 됨
  const { boards, setBoards, number, setNumber, user } = props;

  return (
    <div>
      <h1>홈 : {number}</h1>
      <button onClick={() => setNumber(number + 1)}>번호증가</button>
      //
      <StyledDeleteButton user={user} onClick={() => setBoards([])}>
        전체삭제
      </StyledDeleteButton>
      {boards.map((board) => (
        <h3>
          {board.title}, {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
