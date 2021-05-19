import React from 'react';
import { Link } from 'react-router-dom';

function NotePost() {
  return (
    <div>
      <h3>これは投稿ページです</h3>
      <Link to="/">トップへ戻る</Link>
    </div>
  )
}

export default NotePost;
