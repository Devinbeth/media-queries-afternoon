import React, { Component } from 'react';
import './App.css';
import hamburger from './img/hamburger.png';

class App extends Component {
  constructor() {
    super();
    this.state = {
      menu: false
    };
  }
  render() {
    return (
      <div className='App'>
        <div className='background'>
          <nav className='nav'>
            <div className='logo'>
              <span>Start Bootstrap</span>
            </div>
            <div className='links'>
              <span>SERVICES</span>
              <span>PORTFOLIO</span>
              <span>ABOUT</span>
              <span>TEAM</span>
              <span>CONTACT</span>
            </div>
            <div onClick={() => this.setState({ menu: !this.state.menu })} className='ham'>
              <p>MENU</p>
              <img className='hamburger' src={hamburger} alt=''/>
            </div>
          </nav>
          <div className={this.state.menu ? 'menu slide' : 'menu'}>
            <span>SERVICES</span>
            <span>PORTFOLIO</span>
            <span>ABOUT</span>
            <span>TEAM</span>
            <span>CONTACT</span>
          </div>
          <div className='main'>
            <h3>Welcome To Our Studio!</h3>
            <h1>IT'S NICE TO MEET YOU</h1>
            <div className='button'><p>TELL ME MORE</p></div>
          </div>
        </div>
        <div className='services'>
          <h1>SERVICES</h1>
          <h3>Lorem ipsum dolor sit amet consectetur.</h3>
          <div className='container'>
            <div className='content'>
              <div className='circle'></div>
              <h3>E-Commerce</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className='content'>
              <div className='circle'></div>
              <h3>Responsive Design</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className='content'>
              <div className='circle'></div>
              <h3>Web Security</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
