'use strict';

const React = require('react');
const $  = require('jquery');

class Landing extends React.Component {
    constructor(props) {
        super(props);
    }


    componentWillUnmount() {
    }


    render() {
        return (
            <div>
                <p>This is client side React</p>
            </div>
        );
    }
}


module.exports = Landing;
