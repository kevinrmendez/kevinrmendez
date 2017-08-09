import React from 'react'
import { Router, Route, hashHistory, browserHistory, IndexRoute } from 'react-router';

import App from './components/App'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Skills from './components/Skills'
import Clients from './components/Clients' 
import Awards from './components/Awards'
import Contact from './components/Contact'
import Intro from './components/Intro'
//import {BrowserRouter as Router, Route} from 'react-router-dom'


const routes = (
    <Router history={browserHistory}>
        <Route path = "/" component ={App}>
            <div>
            <IndexRoute component ={Intro} />
            <Route path ="/about" component ={About} />
            <Route path="/portfolio" component ={Portfolio} />
            <Route path="/skills" component ={Skills} />
            <Route path="/clients" component ={Clients} />
            <Route path = '/awards' component={Awards} />
            <Route path ='/contact' component ={Contact} />
            </div>
        </Route>
    </Router>

)
export default routes 