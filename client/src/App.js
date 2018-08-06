import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import SearchResults from "./pages/SearchResults";
import ProfileEdit from "./pages/ProfileEdit";
import Home from "./pages/Home";

const colorStyle = {
  backgroundColor: "black",
}

const App = () => (
  <Router>
    <div style={colorStyle}>
      <Nav />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile" component={ProfileEdit} />
        <Route exact path="/search" component={SearchResults} />
        <Route exact path="/success" component={Home} />
        <Route exact path="/page/html/search" component={Home} />
        <Route exact path="/books/:id" component={Detail} />
        <Route path="/bugpie/html" component={Login} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>

);

export default App;
