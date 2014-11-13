/**
 * @jsx React.DOM
 */

var React = require('react'),
    ReactRouter = require('react-router-component'),
    Layout = require('./components/layout');

var Page = ReactRouter.Page,
    Pages = ReactRouter.Pages,
    NotFound = ReactRouter.NotFound;

var NotFoundPage = React.createClass({
    render: function() {
        return (
            <p>Not found</p>
        );
    }
});

var Application = React.createClass({
    render: function() {
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="/assets/style.css" />
                    <script src="/assets/bundle.js" />
                </head>
                <Pages className="application" path={this.props.path}>
                    <Page path="/:locality/*" handler={Layout} />
                    <NotFound handler={NotFoundPage} />
                </Pages>
            </html>
        );
    }
});

module.exports = Application;

if (typeof window !== 'undefined') {
    window.onload = function() {
        React.renderComponent(Application(), document);
    }
}
