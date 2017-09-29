import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Home from './Home';
import Stuff from './Stuff';
import Contact from './Contact';
import './index.css'

class App extends Component{

    render(){
        return(
            <div>
                <h1>Simple SPA with React Router</h1>
                <ul className="header">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/stuff">Stuff</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/stuff" component={Stuff} />
                    <Route exact path="/contact" component={Contact} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    document.getElementById('root')
);


