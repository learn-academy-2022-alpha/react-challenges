import React, { Component } from 'react'
import Square from "./components/Square";
import Button from "./components/Button";
import "./App.css"
import Playthis from './img/vid.mp4'


class App extends Component {
  render() {
    return (
        <>
          <div id='addBox'>
            <Square/>
          </div>
          <Button/>
            <div>
            </div>
                <video
                    autoPlay
                    loop
                    
                style={{

                        width: "100%",
                        top: "50%",
                        height: "100%",
                        objectfit: "cover",
                        zIndex: "-1"
                }}>
                    <source src={Playthis} type="video/mp4" />
                </video>

        </>
    )
  }
}

export default App

/**
 * User Stories
 * As a user, I can see a white square on the screen
 * As a user, when I click on the square the name of a color appears in the box
 * As a user, each time I click the box I see a new color name
 * As a user, I can cycle through a list of color names, one per click - green, blue, yellow, red, purple, orange
 * As a user, when I click the box, the background changes to match the name of the color name displayed in the box
 * As a user, I can see many color boxes on the page all acting independently of one another
 * Stretch
 * As a user, I can see a button to add or remove color boxes
 * As a user, when I click the add button, I can add one colorbox that acts independently of the other colorboxes
 * As a user, when I click the remove button, I can remove one colorbox
 */




