/**
 * @jsx React.DOM
 */

var React = require('react'),
    ReactAsync = require('react-async'),
    superagent = require('superagent'),
    Locality = require('./locality');

var Layout = React.createClass({
    mixins: [ReactAsync.Mixin],

    statics: {
        getWeatherInfo: function(locality, callback) {
            superagent.get(
                'http://ekb.shri14.ru/api/localities/' + locality,
                function(err, res) {
                    callback(err, res ? res.body : null);
                }
            )
        }
    },

    getInitialStateAsync: function(callback) {
        this.type.getWeatherInfo(this.props.locality, callback);
    },

    render: function() {
        return (
            <div className="layout">
                {Locality(this.state.info)}
            </div>
        );
    }
});

module.exports = Layout;
