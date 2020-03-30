import React, { Component } from 'react';
import logo from '../logo.svg';
import {Link} from 'react-router-dom'
import SocialMediaRow from './SocialMediaRow'
import Header from './header'
// #282c34 react background colour

export default class Homepage extends Component {


    componentDidMount(){
        document.title="A.Rajab :)"
        }
    render() {
        return (
            <div className="App">
            <header className="App-header">
            <Header/>

              <img src={logo} className="App-logo" alt="logo" />
              <p>
               Abduurahman Rajab a front end developer, computer engineer and Human!
              </p>  
               <Link to='./about'   className="App-link" >Want more?</Link>
               <br/>
                <SocialMediaRow/>
            </header>

          </div>
        )
    }
}
