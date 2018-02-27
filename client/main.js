import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';

import { routes } from '../imports/routes/routes';
import { Links } from '../imports/api/links';

Meteor.startup(() => {
    ReactDOM.render(routes, document.getElementById('app'));
});
