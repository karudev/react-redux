import React, { Component } from 'react';

export default class NoMatch extends Component {

    render() {
        return (
            <div>
                <div className={"center"}>
                    <h2>Oops.</h2>
                    <h4>The page you're trying to reach doesn't exist.</h4>
                    <p>Go back to the <a href={"/"}>home page</a> or <a href="mailto:contact@us.com">contact us</a> about the problem.</p>
                </div>
            </div>
        )
    }
}