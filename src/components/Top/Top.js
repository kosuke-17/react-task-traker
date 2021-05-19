import React from 'react'
import Notes from '../Notes';
import NotePost from '../NotePost';
import TopSection from '../TopSection';

function Top() {
  return (
    <>
      <h2>これはTOPページです</h2>
      <TopSection />
      <Notes />
      <NotePost />
    </>
  )
}

export default Top;