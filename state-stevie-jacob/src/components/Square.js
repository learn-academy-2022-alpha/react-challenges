import React, { Component } from 'react'
import yellow from '../img/yellow.jpg'
import green from '../img/green.jpeg'
import red from  '../img/red.png'
import pink from  '../img/pink.jpeg'
import black from '../img/black.jpeg'
import blue from '../img/blue.jpeg'
import white from '../img/start.jpeg'


class Square extends Component{
    constructor(props){
        super(props)
        this.state = {
            colorsArr: ['white','yellow', 'green', 'red' , 'blue', 'pink', 'black'],
            imgArr: [white,yellow, green, red, blue, pink, black],
            colorIndex: 0,
            imgIndex: 0,
        }
    }

    colorChange = () => {
        let {colorsArr, colorIndex} = this.state
        this.setState({colorIndex: colorIndex + 1})
        if(colorIndex === colorsArr.length -1){
            this.setState({ colorIndex:0 })
        }
    }

    bgChange = () => {
        let {imgArr, imgIndex} = this.state
        this.setState({imgIndex: imgIndex + 1})
        if(imgIndex === imgArr.length -1){
            this.setState({ imgIndex:0 })
        }
    }

    render(){
        const {colorsArr, colorIndex, imgArr, imgIndex} = this.state
        return(
            <>
                <div class='box box2' id='square' style={{backgroundColor: colorsArr[colorIndex]}}
                     onClick ={() => {
                         this.colorChange();
                         this.bgChange();
                     }}>

                    <div className="evenboxinner"> Click! </div>

                    <p id='text'>{(colorsArr)[colorIndex]}</p></div>

                <div id='morphinTime'
                     style={{backgroundImage: `url(${(imgArr)[imgIndex]})`,
                         backgroundSize: 'cover',
                         backgroundRepeat: 'no-repeat',
                         backgroundPosition: 'center'}}>
                </div>
              
            </>
        )
    }
}
export default Square

