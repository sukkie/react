import React from 'react';
import styled from 'styled-components';

// 하나의 컨포넌트를 생성

// styled-componets => 하나의 파일로 구조와 디자인을 같이 관리
const StyledFooterDiv = styled.div`
  border: 1px solid black;
  height: 300px;
`;

const footer = () => {
  return (
    <StyledFooterDiv>
      <ul>
        <li>메뉴1</li>
        <li>메뉴2</li>
      </ul>
    </StyledFooterDiv>
  );
};

export default footer;
