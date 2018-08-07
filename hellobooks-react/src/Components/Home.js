import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Body from './header';
import Signupform from '../forms/signup';
import { Link } from 'react-router'
class Home extends Component {
  render() {
    return (
      <div>
      <Header />
        <div className="homecontent">
          {/* <img className="homecontent" src={background}/> */}
          <div className="col md-5 mt-5 subtitle">
            <p>Hello-Books is a simple application that helps manage a library</p>
            <p>and its processes like stocking, tracking and renting books.</p>
            <div id="outer">
              <Link to="/signup" class="inner"><button type="submit" class="btn btn-primary">Signup</button></Link>
              <Link to="/login" class="inner"><button type="submit" class="btn btn-primary">LogIn</button></Link>

            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Home;
