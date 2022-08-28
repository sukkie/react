// 글쓰기, 글삭제, 글목록보기
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import ListPage from './pages/ListPage';
import WritePage from './pages/WritePage';

const App = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" exact={true} element={<ListPage />} />
        {/*<Route path="/write" exact={true} element={<WritePage />} /> */}
      </Routes>
    </div>
  );
};

export default App;
