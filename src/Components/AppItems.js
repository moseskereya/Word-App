import React, { Component } from 'react';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <table>
                <tr>
                <th>Words</th>
                <th>Groups length</th>
                <th>Words Group </th>
                </tr>
                <tbody>
                   {
                     this.props.List.map(word => (
                        <tr key={word}>
                        <td>{word}</td>
                        <td>{word.length}</td>
                        <td>{word[0]}</td>
                        </tr> 
                     ))  
                   }
                </tbody>
            </table>
            </div>
         );
    }
}
 
export default App;