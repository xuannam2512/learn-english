import React, { Component } from 'react';
import './App.css';
import logo from './image/logo.png';
import Topic from './Topic/topics'
import TopicDetail from './Topic-Detail/TopicDetail'

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-none bg-none">
          <a className="navbar-brand">
            <img src={logo} />
          </a>
        </nav>
        
        <div className="container-fluid mr-md-3">
          <div className="row mt-md-5">
          <div class="col">
          </div>
          <div class="col-10">
            <div class="row">
              <div class = 'col-4 topics'> 
                <Topic />
              </div>
              <div class='col-8 topic-details'>
                <TopicDetail />
              </div>
            </div>
          </div>
          <div class="col">
          </div>
          </div>
          <div className="row">

          </div>
        </div>             
      </div>      
    );
  }
}

export default App;
