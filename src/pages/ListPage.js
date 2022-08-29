import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledItemBoxDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 10px;
  height: 100px;
  margin: 20px;
  align-items: center;
`;

let postsSize = 0;

const ListPage = () => {
  console.log('aaaaaa');

  const [posts, setPosts] = useState([
    { id: 1, title: '제목1', content: '내용1' },
    { id: 2, title: '제목2', content: '내용2' },
    { id: 3, title: '제목3', content: '내용3' },
    { id: 4, title: '제목4', content: '내용4' },
    { id: 5, title: '제목5', content: '내용5' },
  ]);

  // id값 초기화를 위해 사용
  useEffect(() => {
    postsSize = posts.length;
  }, []);

  const [post, setPost] = useState({
    id: 0,
    title: '',
    content: '',
  });

  // const handleChangeTitle = (e) => {
  //   console.log(e);
  //   setPost({ title: e.target.value });
  // };

  // const handleChangeContent = (e) => {
  //   setPost({ content: e.target.value });
  // };

  // 하나로 만들기
  const handleForm = (e) => {
    // Computed property names
    // 키값을 동적으로 만듬
    console.log(post);
    setPost({ ...post, [e.target.name]: e.target.value });
    console.log(post);
  };

  const handleWrite = () => {
    postsSize++;
    const t = { ...post, id: postsSize };
    setPosts([...posts, t]);
  };

  const handleDelete = (e) => {
    const id = e.target.name;
    setPosts(posts.filter((post) => post.id != id));
  };

  return (
    <div>
      <h1>글목록 페이지</h1>
      <form>
        <input
          type="text"
          placeholder="제목"
          value={post.title}
          onChange={handleForm}
          name="title"
        />
        <input
          type="text"
          placeholder="내용"
          value={post.content}
          onChange={handleForm}
          name="content"
        />
        <button type="button" onClick={handleWrite}>
          작성
        </button>
      </form>
      <hr />
      {posts.map((post) => (
        <StyledItemBoxDiv key={post.id}>
          <div>
            번호 : {post.id}, 제목 : {post.title}, 내용 : {post.content}
          </div>
          <button name={post.id} onClick={handleDelete}>
            삭제
          </button>
        </StyledItemBoxDiv>
      ))}
    </div>
  );
};

export default ListPage;
