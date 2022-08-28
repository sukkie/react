import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// 하나의 컨포넌트를 생성

// styled-componets => 하나의 파일로 구조와 디자인을 같이 관리
const StyledHeaderDiv = styled.div`
  border: 1px solid black;
  height: 300px;
  background-color: ${(props) => props.backgroundColor};
`;

// Link상속해서 사용
const StyleHeadLink = styled(Link)`
  color: red;
`;

const header = () => {
  return (
    <>
      <StyledHeaderDiv backgroundColor="blue">
        <ul>
          <li>
            {/*<a href="/">홈</a> */}
            <StyleHeadLink to="/">홈</StyleHeadLink>
          </li>
          <li>
            {/* <a href="/login">로그인</a> */}
            <Link to="/login/10">로그인</Link>
          </li>
        </ul>
      </StyledHeaderDiv>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default header;
