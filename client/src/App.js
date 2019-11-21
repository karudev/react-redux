import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Routes
import NoMatch from "./pages/error.js"
// import A from "./pages/index";
import B from "./pages/dashboard/index";

export default class App extends Component {

    render() {

        return (
            <Router>
                <Switch>

                    <Route exac path={ "/" } component={ B } />
                    {/*<Route exac path={ "/" } component={ A } />*/}
                    {/*<Route path={ "/react-redux" } component={ B } />*/}

                    {/* 404 */}
                    <Route component={NoMatch} />
                </Switch>
            </Router>
        );
    }
}
