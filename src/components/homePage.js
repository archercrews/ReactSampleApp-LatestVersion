"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

class Home extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>React Latest Version</h1>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        )
    }
}

module.exports = Home;
