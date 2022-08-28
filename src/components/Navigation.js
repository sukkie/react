import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to="/">글작성</Link>
      </li>
      <li>
        <Link to="/write">글쓰기</Link>
      </li>
    </ul>
  );
};

export default Navigation;
