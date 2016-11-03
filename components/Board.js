var React = require('react');
import Display from './parts/Display';

var Board = React.createClass({

	// barGraphData(results){
	// 	return Object.keys(results).map(function(choice){
	// 		return {
	// 			label: choice,
	// 			value: results[choice]
	// 		};
	// 	});
	// },

	render() {
		return (
			<div id="scoreboard">
				<Display if={this.props.features.status === 'connected' && this.props.features.currentQuestion}>
					<p> {JSON.stringify(this.props.features.results)}</p>
				</Display>
				<Display if={this.props.features.status === 'connected' && !this.props.features.currentQuestion}>
					<h3>Awaiting a question...</h3>
				</Display>
			</div>
		);
	}
});

module.exports = Board;