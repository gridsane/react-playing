/**
 * @jsx React.DOM
 */

var React = require('react'),
    ReactRouter = require('react-router-component'),
    Layout = require('./components/layout');

var Application = React.createClass({
    render: function () {
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="/assets/style.css" />
                </head>
                <Pages className="application" path={this.props.path}>
                    <Page path="/" handler={Layout} />
                    <NotFound handler={NotFoundPage} />
                </Pages>
            </html>
        );
    }
});

module.exports = Application;

window.onload = function() {
  React.renderComponent(Application(), document);
}
