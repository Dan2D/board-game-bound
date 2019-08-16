import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Home/Home";
import GameDetail from "../GameDetail/GameDetail";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/game/:gameId" component={GameDetail}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
