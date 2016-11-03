var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var io = require('socket.io-client');
var Header = require('./parts/Header');

var App = React.createClass({
    
    getInitialState(){
        return {
            status: 'disconnected',
            title: '',
            member: {}
        }
    },

    componentWillMount(){
        this.socket = io('http://localhost:3000');
        this.socket.on('connect', this.connect);
        this.socket.on('disconnect', this.disconnect);
        this.socket.on('welcome', this.welcome);
        this.socket.on('joined', this.joined);
    },

    emit(eventName, payload){
        console.log("To server", payload);
        this.socket.emit(eventName, payload);
    },

    connect(){
        this.setState({status: 'connected'});
    },
    
    disconnect(){
        this.setState({status: 'disconnected'});
    },

    welcome(serverState){
        this.setState({title: serverState.title});
    },

    joined(member){
        console.log(member);
        this.setState({member: member})
    },

    render(){
        return (
            <div>
                <Header title={this.state.title} status={this.state.status} />

                {React.cloneElement(this.props.children, { features: this.state, emit: this.emit, name: this.state.member.name })}
            </div>
        );
    }
});

module.exports = App;
