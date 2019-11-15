import React, { Component } from 'react';
import "./Components/Nav.css"
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <nav>
                    <div className="Title">
                        <h4>Word Finder App</h4>
                    </div>
                   <ul>
                     <li className="App-list">{this.props.List.length}</li>
                     <li>Results</li>
                </ul>
                </nav>
            </div>
         );
    }
}
 
export default Nav;