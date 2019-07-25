import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from "react-router-dom";

//imported Browser as Router 
// wrapped 'App component that i am passing through ReactDom.Render with my new component
ReactDOM.render(
<Router>
    <App />
</Router>,
document.getElementById('root')
);
