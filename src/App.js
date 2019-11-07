import React, { Component } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "./Components/movies";
import NotFound from "./Components/notfound"
import Navbar from "./Components/navbar";
import Form from "./Components/form";
import NewMovie from "./Components/new_movie";
class App extends Component {
  render() {
    return (
      // <div>
      //   {/* <h1>Hi There</h1>  */}
      //   <Movies />
      // </div>
      <React.Fragment>
        <Navbar></Navbar>
        <main className="component">
          <Switch>
            <Route path="/movies" component={Movies}></Route>
            <Route path="/form" component={Form}></Route>
            <Route path="/notfound" component={NotFound}></Route>
            <Route path="/newmovie" component={NewMovie}></Route>
            <Redirect path="/" exact to="/movies" ></Redirect>
            <Redirect to="/notfound"></Redirect>
          </Switch>
        </main>
      </React.Fragment>

    );
  }
}

export default App;