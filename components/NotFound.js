import React from 'react';
import { Link } from 'react-router';
export default class NotFound extends React.Component{
	render(){
		return (
			<div>
				<h2>Page not found! </h2>
				<Link to="/">Audience</Link><br/>
				<Link to="/speaker">Speaker</Link><br/>
				<Link to="/board">Board</Link><br/>
			</div>
		);
	}	
}