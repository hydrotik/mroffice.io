/* global window */
'use strict';
const Landing = require('./landing.jsx');
const React = require('react');
const ReactDOM = require('react-dom');


class Page {
    static blastoff() {

        this.mainElement = ReactDOM.render(
            <Landing />,
            window.document.getElementById('app-mount')
        );
    }
}


module.exports = Page;


/* $lab:coverage:off$ */
if (!module.parent) {
    window.page = Page;
    Page.blastoff();
}
/* $lab:coverage:on$ */
