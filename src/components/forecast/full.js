/**
 * @jsx React.DOM
 */

var React = require('react');

var FullForecast = React.createClass({

    render: function() {
        console.log(this.props);
        return (
            <div className="forecast__full">
                Full forecast
            </div>
        );
    }
});

module.exports = FullForecast;
