import React,{useState} from 'react';
import logo from './logo.svg';
import Search from './components/searchComponent/search';
import AdminSearch from './components/adminSearch/admin_search';
import MovieComponent from './components/movieComponent/moviecomponent';
import ActorComponent from './components/actorComponent/actorcomponent';
import DirectorComponent from './components/directorComponent/directorcomponent';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";



function App() {

	const[clickedSuggestion,set_clickedSuggestion] = useState("");



	const clickedSuggestionHandler = (data,query) => {
		set_clickedSuggestion(data);

	}





  return (
    <Router>
        <Switch>
            <Route path="/admin">
                <AdminSearch/>
            </Route>
            <Route path="/">
                 <div className="App">
                    <Search  clickedSuggestionHandler = {clickedSuggestionHandler} />
                    {clickedSuggestion.type === 'm' ?
                    <MovieComponent  movieData = {clickedSuggestion} key = {clickedSuggestion.id} /> :""}
                    {clickedSuggestion.type === 'actor'?
                    <ActorComponent clickHandler = {clickedSuggestionHandler} actorData = {clickedSuggestion}
                     />:""}
            </div>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;

