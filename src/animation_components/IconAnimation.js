import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../animations/animIcon.json'

class IconAnimation extends Component {


  render(){

    const defaultOptions = {
      loop: false,
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

export default IconAnimation