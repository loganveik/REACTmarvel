import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import charPage from './pages/character';
import comicPage from './pages/comicbook';
import profPage from './pages/profile';
import writePage from './pages/write';
import viewPage from './pages/view';

function App() {
  return (
    <Router>
      <Route exact path="/" component={profPage} />
      <Route path="/search/character" component={charPage} />
      <Route path="/search/comicbook" component={comicPage} />
      <Route path="/write" component={writePage} />
      <Route path="/view" component={viewPage} />
    </Router>
  );
}

export default App;
