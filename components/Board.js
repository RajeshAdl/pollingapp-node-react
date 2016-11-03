var React = require('react');
import { BarChart } from 'react-d3';
import Display from './parts/Display';

export default class Board extends React.Component {
    constructor(props) {
        super(props);

        this.getData = (results) => {
					console.log(results);
            return Object.keys(results).map((choice) => {
                return {
                    label: choice,
                    value: results[choice]
                };
            });
        };
    };

	render() {
		return (
			<div id="scoreboard">
				<Display if={this.props.features.status === 'connected' && this.props.features.currentQuestion}>
					<BarChart     data={this.getData(this.props.features.results)}
                        title={this.props.features.currentQuestion.q}
                        height={window.innerHeight * 0.6}
                        width={window.innerWidth * 0.9} />
          <p>{this.props.results}</p>
				</Display>
				<Display if={this.props.features.status === 'connected' && !this.props.features.currentQuestion}>
					<h3>Awaiting a question...</h3>
				</Display>
			</div>
		);
	}
}