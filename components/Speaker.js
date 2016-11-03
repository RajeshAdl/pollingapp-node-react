import React from 'react';

export default class Speaker extends React.Component{
	render(){
		return (
			<h1>Speaker: {this.props.features.title } </h1>
		);
	}	
}