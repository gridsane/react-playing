/**
 * @jsx React.DOM
 */

var React = require('react/addons'),
    ReactRouter = require('react-router-component'),
    ShortForecast = require('./forecast/short'),
    FullForecast = require('./forecast/full'),
    HoursForecast = require('./forecast/hours');

var Location = ReactRouter.Location,
    Locations = ReactRouter.Locations;

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
        // @dirty, Forecast shouldn't know anything about locality.
        // Tabs should be in the "Locations" (Panes router) context,
        // to work correctly =\
        var path = "/" + this.props.locality;

        // @todo
        // 1. Looks like it not possible to pass additional props
        // to the handler, may be should consider to use simple switch..case
        // solution ..
        // 2. "NotFound" state must be managed on the parent level
        return (
            <div className="forecast">
                <div className="forecast__tabs">
                    <ForecastTab href={path + "/short"} className="button-left">кратко</ForecastTab>
                    <ForecastTab href={path + "/full"} className="button-middle">подробно</ForecastTab>
                    <ForecastTab href={path + "/hours"} className="button-right">по часам</ForecastTab>
                </div>

                <Locations contextual className="forecast__panes">
                    <Location path="/short" handler={ShortForecast} ref="shit" />
                    <Location path="/full" handler={FullForecast} />
                    <Location path="/hours" handler={HoursForecast} />
                </Locations>
            </div>
        );
    }
});

module.exports = Forecast;
