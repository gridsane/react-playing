/**
 * @jsx React.DOM
 */

var React = require('react/addons'),
    ReactRouter = require('react-router-component');

var ForecastTab = React.createClass({
    mixins: [ReactRouter.NavigatableMixin],

    isActive: function() {
        return this.getPath() === this.props.href;
    },

    render: function() {
        var classes = React.addons.classSet({
            "button": true,
            "button-active": this.isActive(),
        });

        return this.transferPropsTo(
            ReactRouter.Link({className: classes}, this.props.children)
        );
    }
});

var Forecast = React.createClass({
    getDefaultProps: function() {
        return {
            pane: 'short'
        }
    },

    render: function() {
        // @dirty, Forecast shouldn't know anything about locality
        var path = "/" + this.props.locality;

        return (
            <div className="forecast">
                <ForecastTab href={path} className="button-left">кратко</ForecastTab>
                <ForecastTab href={path + "/full"} className="button-middle">подробно</ForecastTab>
                <ForecastTab href={path + "/hours"} className="button-right">по часам</ForecastTab>
            </div>
        );
    }
});

module.exports = Forecast;
