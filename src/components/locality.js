/**
 * @jsx React.DOM
 */

var React = require('react');

var Locality = React.createClass({
    render: function() {
        return (
            <div className="locality">
                <h1 className="locality__header">
                    Погода {this.props.nameprep}
                </h1>
            </div>
        );
    }
});

module.exports = Locality;
