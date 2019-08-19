import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Home/Home";
import GameDetail from "../GameDetail/GameDetail";

// Think about gameName vs GameID for games in New Games vs Trending/Top, (BGG id's don't match Board Game Atlas)
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/game/:gameName/:gameId" component={GameDetail}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
