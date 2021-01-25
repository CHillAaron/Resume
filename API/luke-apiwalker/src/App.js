import './App.css';
import React from 'react';
import { Router} from "@reach/router";
import Form from './components/form'
import People from './components/people'
import Film from './components/films'
import Planet from './components/planets'
import Species from './components/species'
import Starship from './components/starships'

import 'bootstrap/dist/css/bootstrap.min.css';





function App() {

  return (
    <div className="App">
        
      <Form />
      
      <Router>
        <Film path="/starwars/films/:id"/>
        <People path="/starwars/people/:id"/>
        <Planet path="/starwars/planets/:id"/>
        <Species path="/starwars/species/:id"/>
        <Starship path="/starwars/starships/:id"/>  
      </Router>
    </div> 
  );
}

export default App;
