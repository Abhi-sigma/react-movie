import React from 'react';
import * as result from "../../test_object.js" ;



class CastComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {'actors':[]}
	}


	setActors(props){
		const cast = this.props.cast(this.props);
		this.setState({'actors':cast});

	}


	componentDidMount(){
		this.setActors();
	}

	render(){
		return(
				<div className = 'cast-suggestions'>
				{this.state.actors.map((item) =>
					<div className="cast">
					<li>{item.name}</li>
					<img src = {item.image} ></img>
					</div>
					)
			}
				</div>

			)


	}
}

export default CastComponent;