import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/home/Home';

const HomePage = () => {
  // http요청(fetch, axios)
  // 데이터 취득은 페이지에서 할 것
  const [boards, setBoards] = useState([]);
  const [number, setNumber] = useState(0);
  const [user, setUser] = useState({});

  // 두번재 인자가 빈배열이므로 어디에도 의존하지 않아서 최초 한번만 실행됨.
  useEffect(() => {
    let data = [
      { id: 1, title: '제목1', content: '내용1' },
      { id: 2, title: '제목2', content: '내용2' },
      { id: 3, title: '제목3', content: '내용3' },
      { id: 4, title: '제목4', content: '내용4' },
      { id: 5, title: '제목5', content: '내용5' },
    ];

    // 비동기로 fetch하면 처음엔 빈데이터가 들어가고, 그 후 실제 데이터가 들어감
    setBoards([...data]);
    setUser({ id: 1, username: 'ssar' });
  }, []);

  return (
    <div>
      <Header />
      <Home
        boards={boards}
        setBoards={setBoards}
        number={number}
        setNumber={setNumber}
        user={user}
      />
      <Footer />
    </div>
  );
};

export default HomePage;
