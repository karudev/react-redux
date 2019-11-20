import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ROUTES } from "./constants/RouteConfig"
import NoMatch from "./pages/error.js"

export default class App extends Component {

    render() {

        return (
            <Router>
                <Switch>

                    {
                        // Mapping réussi
                        // ToDo recupérer les path et component
                        ROUTES.map((path, component) => {
                            return (
                                <Route path={ path } component={ component } />
                            )
                        })
                    }

                    {/* 404 */}
                    <Route component={NoMatch} />

                </Switch>
            </Router>
        );
    }
}

App.propTypes = {
    path: PropTypes.string.isRequired,
    component: PropTypes.element.isRequired
};
