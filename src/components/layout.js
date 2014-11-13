/**
 * @jsx React.DOM
 */

var React = require('react'),
    ReactAsync = require('react-async'),
    superagent = require('superagent'),
    Header = require('./header'),
    Locality = require('./locality'),
    Fact = require('./fact'),
    Forecast = require('./forecast');

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

    componentWillReceiveProps: function(nextProps) {
        if (this.props.locality !== nextProps.locality) {
            this.type.getWeatherInfo(nextProps.locality, function(err, info) {
                if (err) {
                    throw err;
                }
                this.setState(info);
            }.bind(this));
        }
    },

    render: function() {
        return (
            <div className="layout">
                <Header />
                {Locality(this.state.info)}
                {Fact(this.state.fact)}
                {Forecast({
                    data: this.state.forecast,
                    locality: this.props.locality,
                    pane: this.props.pane
                })}
            </div>
        );
    }
});

module.exports = Layout;
