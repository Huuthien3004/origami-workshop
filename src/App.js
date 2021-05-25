import React, { Component } from 'react';
import './App.css';
import Aside from './components/aside/Aside';
import Footer from './components/footer/Footer';
import Navbar from './components/header/Navbar';
import Main from './components/main/Main';
import Post from './components/post/Posts';

export class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar />
          <Aside />
          <Main />
          <Post />
          <Footer />
      </div>
    )
  }
}

export default App;