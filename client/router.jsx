import React from 'react';
import { Switch, Route } from 'react-router';
 
export default (
    // Switch is added in v4 react-router
    <Switch>
        <Route path='/' />
        <Route path='/portfolio' />
        <Route path='/cv' />
        <Route path='/contact' />
        <Route /> // No-match case
    </Switch>
);