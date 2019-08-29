import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Home/Home";
import GameDetail from "../GameDetail/GameDetail";
import Search from "../Search/Search";

function App() {
  return (
    <Router basename="/board-game-bound/">
      <div className="App">
        <Header />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/game/:gameName/:gameId" component={GameDetail}/>
        <Route path="/list/:searchType/:text" component={Search}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
