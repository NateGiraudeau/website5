import React, {Component} from 'react';
import BackgroundAnimation from './animation_components/BackgroundAnimation.js';
import Navbar from './Navbar.js';
import IconAnimation from './animation_components/IconAnimation.js';
import RedShapeAnim from './animation_components/RedShapeAnim.js';
import scrollArrow from './scroll-arrow.svg';
import scrollShape1 from './scroll-shape-1-01.svg';
import scrollShape2 from './scroll-shape-2.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App" id="app">
        <Navbar />
        <div className="white-background">
        <div id="bgAnim"><BackgroundAnimation /></div>
          <div className="page-main">
            <div className="scroll-shape" id="red_shape_1"><RedShapeAnim /></div>
            <div className="page-main-center">
              <div id="logo"><IconAnimation /></div>
              <h1>Website 5</h1>
              <hr />
              <p>This is the fifth website that I have made. Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a className="button primary big" href="#app">BUTTON</a>
            </div>
            <a href="#scrollIcon" id="scrollIcon" className="scroll-icon">
              <img src={scrollArrow} alt="red arrow pointing downward" />
            </a>
          </div>
  
          <div className="scroll-shape one">
            <img src={scrollShape1} id="scrollShape1" alt="" />
          </div>
  
          <div className="page-second">
            <div className="panel1">
              <h1>Amazing!</h1>
              <p>Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Quisque id diam vel quam elementum pulvinar. 
              Eu augue ut lectus arcu bibendum.</p>
              <a className="button white" href="#app">BUTTON</a>
            </div>
          </div>
  
          <div className="flip-horizontal"><img src={scrollShape2} id="scrollShape2" alt="" /></div>
        </div>
  
        <div className="page-third">
          <h1>Website 5</h1>
          <p>Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua.</p>
          <a className="button white big" href="#app">BUTTON</a>
        </div>
        
      </div>
    )
  }
}

export default App;
