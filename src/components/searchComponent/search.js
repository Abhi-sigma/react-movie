import React, { useState } from 'react';
import axios from 'axios';
import styles from '../../styles.css';
import * as result from "../../test_object.js" ;
const suggestions =[];

function Search(props){
	const [rendered_suggestions,set_renderered_suggestions] = useState([]);
	const [is_suggestion_rendered_boolean,set_is_suggestion_rendered_boolean] = useState(false);
	const [suggestions_display,set_suggestons_display] = useState(false);
	const [search_query,set_search_query] = useState("");
	const [cast_suggestions,set_cast_suggestions] = useState([]);
	const [movie_suggestions,set_movie_suggestions] = useState([]);
	const [director_suggestions,set_director_suggestions] = useState([]);
	const [other_suggestions,set_other_suggestions] = useState([]);

	// common functions to get suggestions from the query

	const getSuggestions = (suggestion_type,state_handler) => {
		let temp_array = []
		result.default.forEach( suggestion => {
			if(suggestion.type == suggestion_type) temp_array.push(suggestion);
	})
		 state_handler(temp_array);
	     return temp_array


	}

	const onChange = e => {
		let input = e.target.value;
		set_search_query(input);
		const movie_suggestions = getSuggestions("m",set_movie_suggestions);
		const cast_suggestions =  getSuggestions("actor",set_cast_suggestions);
		const director_suggestions = getSuggestions("director",set_director_suggestions);

	}

	const onClickMoviehandler = e => {
		e.preventDefault();
		const movie_id = e.target.parentElement.dataset.movie_id;
		props.clickedSuggestionHandler({"id":movie_id,"type":"m"});
		set_search_query("");


	}

	const onClickActorhandler = e => {
		e.preventDefault();
		const cast_id = e.target.parentElement.dataset.cast_id;
		props.clickedSuggestionHandler({"id":cast_id,"type":"actor"});
		set_search_query("");


	}

	const onClickDirectorhandler = e => {
		e.preventDefault();
		const director_id = e.target.parentElement.dataset.director_id;
		props.clickedSuggestionHandler({"id":director_id,"type":"director"});
		set_search_query("");


	}




	return(
		<div className = "searchblock">
		 <input onChange = {onChange} type = "text" placeholder = "search" />
		 <div className = "suggestionblock">
		 { search_query  ? <div className = "suggestion_wrapper"  >
		 						<Movie onClickHandler = {onClickMoviehandler}
		 						       movielist = {movie_suggestions}
		 						/>
		 						<Cast onClickHandler = {onClickActorhandler} cast = {cast_suggestions} />
		 						<Director  onClickHandler = {onClickDirectorhandler} director = {director_suggestions} />
		 				  </div>
		 						: ""}
		</div>
		</div>
		)

}


function Movie(props){
	const movie_suggestions = props.movielist;
	console.log(movie_suggestions);
	return(
		movie_suggestions.map( (item,index) =>
			<div onClick = {props.onClickHandler} data-movie_id = {item.movie_id} >
			 	<img  src = {item.movie_poster} className = "image_suggestions"></img>
			 	<li  className ="suggestions_list" >{item.movie_name} </li>
		 	</div>
		  )
	)
}



function Cast(props){
	const cast_suggestions = props.cast;
	console.log(cast_suggestions);
	return(
		cast_suggestions.map( (item,index) =>
			<div  onClick = {props.onClickHandler} data-cast_id = {item.cast_id} >
			 	<img  src = {item.image} className = "image_suggestions"></img>
			 	<li className ="suggestions_list" >{item.name} </li>
		 	</div>
		  )
	)
}



function Director(props){
	const director_suggestions = props.director;
	console.log(director_suggestions);
	return(
		director_suggestions.map( (item,index) =>
			<div onClick = {props.onClickHandler} data-director_id = {item.director_id}>
			 	<img  src = {item.image} className = "image_suggestions"></img>
			 	<li className ="suggestions_list" >{item.name} </li>
		 	</div>
		  )
	)


}

export default Search;



