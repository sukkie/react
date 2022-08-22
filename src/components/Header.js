import React from 'react';
import styled from 'styled-components';

// 하나의 컨포넌트를 생성

// styled-componets => 하나의 파일로 구조와 디자인을 같이 관리
const StyledHeaderDiv = styled.div`
  border: 1px solid black;
  height: 300px;
`;

const header = () => {
  return (
    <StyledHeaderDiv>
      <ul>
        <li>오시는길 : 서울</li>
        <li>전화번호 : 020000000</li>
      </ul>
    </StyledHeaderDiv>
  );
};

export default header;
