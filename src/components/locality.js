/**
 * @jsx React.DOM
 */

var React = require('react');

var Locality = React.createClass({
    render: function() {
        return (
            <h1>Погода {this.props.nameprep}</h1>
        );
    }
});

module.exports = Locality;
