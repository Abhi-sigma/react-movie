import React,{useState,useEffect} from 'react';
import Search from '../../components/searchComponent/search';

function Home(props){

	const [home_page_movies,set_home_page_movies] = useState({latest_addition:["gYoPkmjAK9U","Box7wRT9Zkg"],
															 nepali_movies:["https://m.media-amazon.com/images/M/MV5BZjAwZjc1MjktNmMwOS00MzA5LWE3MDktMzUxMmMzOTgxYjk3XkEyXkFqcGdeQXVyNjc5Mjg4Nzc@._V1_SX300.jpg",
															 "https://m.media-amazon.com/images/M/MV5BM2M0NTJjNDYtNjFhMC00MmEzLTk4NjYtNGY4MDhlNTMzYTlmXkEyXkFqcGdeQXVyODMzMjMzOTg@._V1_SX300.jpg"],
															 dubbed_movies:[]})

	const [display_latest_movies,set_display_latest_movies] = useState(true);
	const searchSuggestionHandler = props.searchSuggestionHandler;

	// api to request data from ,this will set state
	useEffect(()=>console.log("useffect"),home_page_movies)



	return(
			<div className = "container-fluid">
				<div className = "row">
					<div className = "col">
						<nav className="navbar navbar-dark bg-dark justify-content-between">
							<a className="navbar-brand">Mero Madrasi Movies</a>
							<form className="form-inline">
								<Search clickedSuggestionHandler = {searchSuggestionHandler}>
								</Search>
						   </form>
					   </nav>
					</div>
				</div>

				<div className = "row">
					<div className = "col">
						<div className = "category_wrapper">
							<div className = "category_header">
								<span>Recently Added</span>
								{home_page_movies.latest_addition.map((item) => <li>{item})</li>)}
							</div>
						</div>
					</div>
				</div>
				<div className = "row">
					<div className = "col">
						<div className = "category_wrapper">
							<div className = "category_header">
								<span>Dubbed Movies</span>
								{home_page_movies.latest_addition.map((item) => <li>{item})</li>)}
							</div>
						</div>
					</div>
				</div>
				<div className = "row">
					<div className = "col">
						<div className = "category_wrapper">
							<div className = "category_header">
								<div>Nepali Movies</div>
								{home_page_movies.nepali_movies.map((item) =>
									<>
								    <img src = {item}/>
								    </>
								)}

							</div>
						</div>
					</div>
				</div>
		</div>





		)
}


export default Home
