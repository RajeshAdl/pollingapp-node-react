import React from 'react';
import Display from './parts/Display';
import Join from './parts/Join';
import Ask from './parts/Ask';

export default class Audience extends React.Component{
	render(){
		return (
			<div>
				<Display if={this.props.features.status === "connected"}>
					<Display if={this.props.features.member.name}>
						<Display if={!this.props.features.currentQuestion}>
							<h2>Welcome {this.props.features.member.name}</h2>
							<p>{this.props.features.audience.length} audience connected</p>
							<p>Questions</p>
						</Display>
						<Display if={this.props.features.currentQuestion}>
							<Ask question={this.props.features.currentQuestion} emit={this.props.emit}/>
						</Display>
					</Display>
					<Display if={!this.props.features.member.name}>
						<h1>Join the session</h1>
						<Join emit={this.props.emit} />
					</Display>
				</Display>
			</div>
		);
	}	
}