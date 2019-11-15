import React, { Component } from 'react';
import AppItems from "./AppItems"
import Nav from "../Nav"
import axios from "axios"
class App1 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
                StartsWith:"",
                EndsWith:"",
                Include:"",
                WORDMAXLENGTH:10,
                WORDMINLENGTH:2,
                List:[]
         }
    }
    
    onsumitForm = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://wordfind.azurewebsites.net/api/English?code=8IZqWCIZi3kVDCXhQnmyvh0EKHvaQsVWN5kJjLnqR4ss4og5HzTL3Q==', this.state)
        .then(response => {
            console.log(response)
            this.setState({List: response.data})
        })
        .then(error => {
            console.log(error)
        })
    }
    render() { 
     const {StartsWith, EndsWith, Include, WORDMAXLENGTH, WORDMINLENGTH,
    List}= this.state
        return ( 
            <div>
                <Nav List={List} />
                        <form onSubmit={this.submitHandler}>
                        <input type="text" name="StartsWith" 
                        placeholder="startsWith"
                        onChange={this.onsumitForm} value={StartsWith}/><br/>
                         <input type="text" name="Include"
                        placeholder="include"
                        onChange={this.onsumitForm} value={Include}/><br/>
                        <input type="text" name="EndsWith" 
                        placeholder="EndsWith"
                        onChange={this.onsumitForm} value={EndsWith}/><br/>
                        <input type="number" name="WORDMAXLENGTH"  
                        onChange={this.onsumitForm} value={WORDMAXLENGTH}
                        min="2" max="17"/><br/>
                        <input type="number" name="WORDMINLENGTH" 
                        onChange={this.onsumitForm} value={WORDMINLENGTH}
                        min="1" max="5"/><br/>
                        <button type="submit">Submit</button>
                </form>
                <AppItems List={List} key={List.id}/>
            </div>
         );
    }
}
 
export default App1;