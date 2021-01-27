import React, {useEffect} from 'react';
import "./App.scss";
import {useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import {loadGames} from './Redux/actions/gamesAction';
import Nav from './components/Nav/Nav';



function App() {

const dispatch = useDispatch();

useEffect(()=>{
  dispatch(loadGames());
},[dispatch]);


  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route  path={['/game/:id', '/']} exact component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
