/**
 * @jsx React.DOM
 */

var React = require('react');

var HoursForecast = React.createClass({
    render: function() {
        return (
            <div className="forecast__hours">
                Hours forecast
            </div>
        );
    }
});

module.exports = HoursForecast;
