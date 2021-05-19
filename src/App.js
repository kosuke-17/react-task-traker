import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css'

// components
import Navbar from './components/Navbar';
import Notes from './components/Notes';
import NotePost from './components/NotePost';

// Top
import Top from './components/Top/Top';

//Sidebar
import Sidebar from './components/Sidebar/Sidebar';
import Backscreen from './components/Sidebar/Backscreen';

function App() {
  
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <div>
      <Router>
        <Navbar click={() => setSideToggle(true)} />
        <Sidebar show={sideToggle} click={() => setSideToggle(false)} />
        <Backscreen show={sideToggle} click={() => setSideToggle(false)} />
        <Switch>
          <Route path="/" exact component={Top} />
          <Route path="/notes" exact component={Notes} />
          <Route path="/notepost" exact component={NotePost} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;