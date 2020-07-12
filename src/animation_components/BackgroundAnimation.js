import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../animations/bg_animation.json'

class BackgroundAnimation extends Component {


  render(){

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div>
        <Lottie options={defaultOptions}width="100%"/>
      </div>
    )
  }
}

export default BackgroundAnimation