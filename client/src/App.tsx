import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ValidityChecks from './components/ValidityChecks';
import ShortestDistance from './components/ShortestDistance';
import UnionArray from './components/UnionArray';
import Home from './components/Home';
import DenseAppBar from './components/AppBar';
import './App.css';


const App: React.FC = () => {
  return (
    <>
      <Router>
        <DenseAppBar />

        <div className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/validitychecks" component={ValidityChecks} />
          <Route exact path="/shortestdistance" component={ShortestDistance} />
          <Route exact path="/unionarray" component={UnionArray} />
        </div>
      </Router>
    </>
  );
}

export default App;
