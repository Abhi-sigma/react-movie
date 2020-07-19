import React, { useState } from 'react';
import axios from 'axios';

function AdminSearch(){
	const [search_query,set_search_query] = useState("");
	const [rendered_suggestions,set_renderered_suggestions] = useState([]);


	const onChange = e => {
		// make a network query here
		// on arrival of results
		// we will put that in state
		// hide the api key on production
		let input = e.target.value;
		axios.get("http://www.omdbapi.com/?t="+ e.target.value +"&apikey=5d9755d")
		.then( res => {
			set_renderered_suggestions(res.data);
			set_search_query(input);
	})
}

	return(

		<React.Fragment>
		<div className = "searchblock-wrapper">
			<div className = "search-input">
				 <input className = "form-control" onChange = {onChange} type = "text" placeholder = "adminsearch" />
			</div>
		</div>

		 {search_query ? [rendered_suggestions].map((item,index) =>
		 	<React.Fragment key = {index}>
		 	<div className ="search_movie_info">
			 	<img   src = {item.Poster} className = "image_suggestions"></img>
			 	<li   className ="suggestions_list" >Name of the movie: {item.Title} </li>
			 	<li   className ="suggestions_list" >Director: {item.Director} </li>
			 	<li   className ="suggestions_list" >Year Released: {item.Year} </li>
			 	<li   className ="suggestions_list" >Actors: {item.Actors} </li>
			 	<li   className ="suggestions_list" >Language: {item.Language} </li>
			 	<li   className ="suggestions_list" >Storyline: {item.Plot} </li>
		 	</div>
		 	<form className = "upload-form">
		 		<div className="form-group">
				    <label htmlFor="movie_title">Movie Name</label>
				    <input type="text" className = "form-control" id = "movie_title" aria-describedby="movie_title" readOnly value={item.Title}/>
				</div>
				<div className="form-group">
				    <label htmlFor="movie_title_alternate">Alternate Movie Name</label>
				    <input type="text" className = "form-control" id = "movie_title_alternate" aria-describedby="movie_title" />
				    <small  className="form-text text-muted">provide an alternate title eg dubbed version</small>
				</div>
				<div className="form-group">
				    <label htmlFor="movie_tags">Movie Tags</label>
				    <input type="text" className = "form-control" id = "movie_tags" aria-describedby="movie_title" />
				    <small  className="form-text text-muted">provide tags like horror,comedy seperated by comma</small>
				</div>
				<div className="form-group">
				    <label htmlFor="director">Director</label>
				    <input type="text" className="form-control" id="director" aria-describedby="director" readOnly value={item.Director}/>
				</div>
				<div className="form-group">
				    <label htmlFor="released_year">Released Year</label>
				    <input type="text" className="form-control" id="released_year" aria-describedby="released_year" readOnly value={item.Year}/>
				</div>
				<div>
				{item.Actors?item.Actors.split(",").map((item,index) =>
				<div className="form-group" key = {index}>
				    <label htmlFor="actor_name">Actors</label>
				    <input type="text" className="form-control" aria-describedby="actor_name" readOnly value={item}/>
				</div>
				):""}
				</div>
				<div className="form-group">
				    <label htmlFor="movie_language">Movie Language</label>
				    <input type="text" className="form-control" id="movie_language" aria-describedby="movie_language"  readOnly value={item.Language}/>
				</div>
				<div className="form-group">
				    <label htmlFor="movie_plot">Movie Language</label>
				    <input type="text" className="form-control" id="movie_plot" aria-describedby="movie_plot" readOnly value={item.Plot}/>
				</div>
				<div className="form-group">
				    <label htmlFor="movie_link">Youtube Link</label>
				    <input type="text" className="form-control" id="youtube_link" aria-describedby="youtube link" />
				</div>
				<button className ="button" type = "submit">Submit</button>
		 	</form>

		 	</React.Fragment>



		 	)  :   ""  }
		 </React.Fragment>


)
	}





export default AdminSearch