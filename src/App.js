import './App.css';
import React from 'react';
import Main from './components/Post/Main';
import Navbar from './components/layout/Navbar'
import Aside from './components/layout/Aside'
import Footer from './components/layout/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Comment from "./components/Comment/Comment"
import Register from "./components/Register/Register"
import Login from "./components/Login/Login"
import Profile from "./components/Profile/Profile"

function App() {

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='Container'>
          <Aside />
          <Switch>
            <Route exact path="/Comment" component={Comment} />
            <Route exact path="/" component={Main} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;