import React, { Component } from 'react';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const names = [
        'ajkbj-hbctkuk',
        'cuiguvuglgghygliuh',
        'bv.kvikhjou-g889',
        'mv,jgfy-jugfvyv'
        ]
        const otherNames = names.filter((a, b) => a - b)
        return ( 
            <div>
                {otherNames.map((name) => 
                <ul>
                   <li>{name.length > 4}</li>
                </ul>
                )}
            </div>
         );
    }
}
 
export default Main;