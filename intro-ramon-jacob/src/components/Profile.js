import React, { Component } from 'react'

class Profile extends Component{
    render(){
        return(
            <>
                <h3>Ramon's Profile</h3>
                <ul>
                    <li>Hometown: </li>
                    <li>Hobbies:
                        <ol>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                        </ol>
                    </li>
                </ul>
                <h3>Jacob's Profile</h3>
                <ul>
                    <li>Hometown: Ewa Beach, HI</li>
                    <li>Hobbies:
                        <ol>
                            <li>Gym</li>
                            <li>Paddleboarding</li>
                            <li>Running</li>
                            <li>Dance</li>
                            <li>Movies</li>
                        </ol>
                    </li>
                </ul>
            </>
        )
    }
}

export default Profile