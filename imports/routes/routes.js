import { Meteor } from 'meteor/meteor';
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import UseACode from '../ui/UseACode';
import GetACode from '../ui/GetACode';
import Changelog from '../ui/Changelog';
import NotFound from '../ui/NotFound';

export const routes = (
    <Router>
        <Switch>
            <Route exact path="/" component={UseACode} />
            <Route path="/getcode" component={GetACode} />
            <Route path="/changelog" component={Changelog} />
            <Route component={NotFound}/>
        </Switch>
    </Router>
);
