import React from 'react';
import ReactDOM from 'react-dom';

export default class JoinSpeaker extends React.Component{

	start(){
		var speakerName = ReactDOM.findDOMNode(this.refs.name).value;
		var title = ReactDOM.findDOMNode(this.refs.title).value;
		this.props.emit('start', {name: speakerName, title: title});	
	}

	render(){
		return (
			<form action="javascript:void(0)" onSubmit={this.start.bind(this)}>
				<label>Full name</label>
				<input ref="name" className="form-control" placeholder="Enter user name" required/>
				<label>Presentation title</label>
				<input ref="title" className="form-control" placeholder="Enter title for the presentation" required/>
				<button className="btn btn-primary">Join</button>
			</form>
		);
	}	
}