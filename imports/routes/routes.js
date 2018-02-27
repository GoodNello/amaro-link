import { Meteor } from 'meteor/meteor';
import React from 'react';
//import history from './history'; VALUTARE ELIMINAZIONE
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import UseACode from '../ui/UseACode';
import GetACode from '../ui/GetACode';
import NotFound from '../ui/NotFound';

const unathenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];

export const routes = (
    <Router>
        <Switch>
            <Route exact path="/" component={UseACode}/>
            <Route path="/code" component={GetACode}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>
);
