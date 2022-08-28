import React from 'react';

const WritePage = () => {
  const handleWrite = () => {};

  let post = { id: 6, title: '' };

  return (
    <div>
      <h1>글작성 페이지</h1>
      <hr />
      <form>
        <input type="text" placeholder="제목" />
        <button type="button" onClick={handleWrite}>
          작성
        </button>
      </form>
    </div>
  );
};

export default WritePage;
