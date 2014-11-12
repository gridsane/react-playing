/**
 * @jsx React.DOM
 */

var React = require('react');

var Header = React.createClass({
    render: function() {
        return (
            <div className="header">
                <img className="header__logo" src="/assets/images/logo.svg" />
                <div className="header__search">
                    <div className="header__search-label">
                        <span className="header__search-label-link">Погода</span>
                    </div>
                    <input type="search" className="header__search-input" />
                    <button className="button button-search">Найти</button>
                </div>
            </div>
        );
    }
});

module.exports = Header;
