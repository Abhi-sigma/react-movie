import React, { useState } from 'react';
import axios from 'axios';

function AdminSearch(){
	const [search_query,set_search_query] = useState("");
	const [rendered_suggestions,set_renderered_suggestions] = useState([]);
	let results_in_array = [];

	const onChange = e => {
		// make a network query here
		// on arrival of results
		// we will put that in state
		let input = e.target.value;
		axios.get("http://www.omdbapi.com/?t="+ e.target.value +"&apikey=5d9755d")
		.then( res => {
			set_renderered_suggestions(res.data);
			set_search_query(input);
			for(let items in res.data){
				results_in_array.push(
					<div>
						<li>{items}</li>
						<li>{res.data[items]}</li>
					</div>
					)
			}
		});
	}

	return(

		<div className = "searchblock">
		 <input onChange = {onChange} type = "text" placeholder = "adminsearch" />
		 {search_query ? [rendered_suggestions].map((item,index) =>
		 	<div key = "index">
			 	<img   src = {item.Poster} className = "image_suggestions"></img>
			 	<li   className ="suggestions_list" >{item.Title} </li>
			 	<li   className ="suggestions_list" >{item.Director} </li>
			 	<li   className ="suggestions_list" >{item.Year} </li>
			 	<li   className ="suggestions_list" >{item.Actors} </li>
			 	<li   className ="suggestions_list" >{item.Language} </li>
			 	<li   className ="suggestions_list" >{item.Plot} </li>
		 	</div>
		 	)   :   ""



		 }




		    </div>
		    )
	}





export default AdminSearch