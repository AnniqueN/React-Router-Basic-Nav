import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import { Home, About, Contact, Navigation } from './components';
// imported Browser as router 
//set path equal "/"about,home,contact with their prespective component 
//the exact component and not all the other components

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Navigation />
  </div>
);

export default App;
