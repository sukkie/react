import React from 'react';
import styled from 'styled-components';

// 하나의 컨포넌트를 생성

// styled-componets => 하나의 파일로 구조와 디자인을 같이 관리
const FooterList = styled.div`
  border: 1px solid black;
  height: 300px;
`;

const footer = () => {
  return (
    <FooterList>
      <ul>
        <li>메뉴1</li>
        <li>메뉴2</li>
      </ul>
    </FooterList>
  );
};

export default footer;
