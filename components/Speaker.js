import React from 'react';
import JoinSpeaker from './parts/JoinSpeaker';
import Display from './parts/Display';
import Attendance from './parts/Attendance';
import Questions from './parts/Questions';

export default class Speaker extends React.Component {
	render() {
		console.log(this.props.features.member.type);
		return (
			<div>
				<Display if={this.props.features.status === 'connected'}>
					<Display if={this.props.features.member.name && this.props.features.member.type === 'speaker'}>
						<Questions questions={this.props.features.questions} emit={this.props.emit} />
						<Attendance audience={this.props.features.audience} />
					</Display>
					<Display if={!this.props.features.member.name}>
						<p>Start the presentation</p>
						<JoinSpeaker emit={this.props.emit} />
					</Display>
				</Display>
			</div>
		);
	}
}