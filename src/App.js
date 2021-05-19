import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Top from './components/Top/Top';
import Notes from './components/Notes';
import NotePost from './components/NotePost';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
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