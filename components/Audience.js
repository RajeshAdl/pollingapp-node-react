import React from 'react';
import Display from './parts/Display';
import Join from './parts/Join';

export default class Audience extends React.Component{
	render(){
		console.log(this.props.name);
		return (
			<div>
				<Display if={this.props.features.status === "connected"}>
					<Display if={this.props.name}>
						<h2>Welcome {this.props.name}</h2>
						<p>Questions</p>
					</Display>
					<Display if={!this.props.name}>
						<h1>Join the session</h1>
						<Join emit={this.props.emit} />
					</Display>
				</Display>
			</div>
		);
	}	
}