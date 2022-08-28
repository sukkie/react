import React from 'react';
import styled from 'styled-components';

// styled를 Home함수 밖으로 뺌
const StyledDeleteButton = styled.button`
  color: ${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')};
`;

const StyledAddButton = styled(StyledDeleteButton)`
  background-color: green;
`;

const Home = (props) => {
  console.log(props);

  // 구조분할 할당
  // props안의 값중에 알아서 boars가 할당 됨
  const { boards, setBoards, number, setNumber, user } = props;

  return (
    <div>
      <h1>홈 : {number}</h1>
      <StyledAddButton user={user} onClick={() => setNumber(number + 1)}>
        번호증가
      </StyledAddButton>
      {/* StyledDeleteButton에 부모로부터 받은 user값을 user의 이름으로 넘겨줌 */}
      <StyledDeleteButton user={user} onClick={() => setBoards([])}>
        전체삭제
      </StyledDeleteButton>
      {boards.map((board) => (
        <h3 key={board.id}>
          {board.title}, {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
