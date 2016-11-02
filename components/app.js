import React from "react";
var io = require('socket.io-client');

export default class App extends React.Component {
    
    componentWillMount(){
        this.socket = io('http://localhost:3000');
        this.socket.on('connect', this.connect.bind(this));
    }

    connect(){
        alert("Connected: "+this.socket.id);
    }
    
    render(){
        return (
            <div>
                <h1>Hello !</h1>
            </div>
        );
    }
}
