/**
 * @jsx React.DOM
 */

var React = require('react');

var Fact = React.createClass({
    render: function() {
        return (
            <div className="fact">
                <div className="fact__today">сейчас</div>
                <div className="fact__now">
                    <div className="fact__now-temp">{this.props.temp} °C</div>
                    <img className="fact__now-icon" src={"http://ekb.shri14.ru/icons/" + this.props.weather_icon + ".svg"} />
                    <span className="fact__now-weather">{this.props.weather}</span>
                </div>
                <div className="fact__details">
                    <div className="fact__details-line">
                        <span className="fact__details-term">Давление</span>
                        {this.props.pressure} мм рт. ст.
                    </div>
                    <div className="fact__details-line">
                        <span className="fact__details-term">Ветер</span>
                        {this.props.wind}, {this.props.wind_speed} м/c
                    </div>
                    <div className="fact__details-line">
                        <span className="fact__details-term">Влажность</span>
                        {this.props.humidity}%
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Fact;
