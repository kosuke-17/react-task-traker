import React from 'react';
import { Link } from 'react-router-dom';

function TopSection() {
  return (
    <div>
      <h3>これはトップページです</h3>
      <Link to="/">トップへ戻る</Link>
    </div>
  )
}

export default TopSection;
