/**
 * @jsx React.DOM
 */

var React = require('react');

var ShortForecast = React.createClass({
    render: function() {
        return (
            <div className="forecast__short">
                Short forecast
            </div>
        );
    }
});

module.exports = ShortForecast;
