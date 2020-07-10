import React,{useState} from 'react';
import logo from './logo.svg';
import Search from './components/searchComponent/search';
import AdminSearch from './components/adminSearch/admin_search';
import MovieComponent from './components/movieComponent/moviecomponent';
import ActorComponent from './components/actorComponent/actorcomponent';
import DirectorComponent from './components/directorComponent/directorcomponent';



function App() {

	const[clickedSuggestion,set_clickedSuggestion] = useState("");



	const clickedSuggestionHandler = (data,query) => {
		set_clickedSuggestion(data);

	}





  return (
    <div className="App">
    <Search  clickedSuggestionHandler = {clickedSuggestionHandler} />
    <AdminSearch/>
    {clickedSuggestion.type === 'm' ?
    <MovieComponent  movieData = {clickedSuggestion} /> :""}
    {clickedSuggestion.type === 'actor'?
    <ActorComponent clickHandler = {clickedSuggestionHandler} actorData = {clickedSuggestion}
    />:""}

    </div>
  );
}

export default App;
