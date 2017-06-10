'use strict';
const Navbar = require('./navbar.jsx');
const PropTypes = require('prop-types');
const React = require('react');


const propTypes = {
    activeTab: PropTypes.string,
    children: PropTypes.node,
    feet: PropTypes.node,
    neck: PropTypes.node,
    title: PropTypes.string
};

class DefaultLayout extends React.Component {
    render() {

        const year = new Date().getFullYear();

        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="stylesheet" href="/public/media/vendor/simple-line-icons/css/simple-line-icons.css" />
                    <link rel="stylesheet" href="/public/core.min.css" />
                    <link rel="stylesheet" href="/public/layouts/default.min.css" />
                    <link rel="shortcut icon" href="/public/media/favicon.ico" />
                    <link rel="stylesheet" href="/public/media/device-mockups/device-mockups.min.css" />
                    {this.props.neck}

                    <style>{"\
                    .navbar-toggler {\
                        z-index: 1;\
                    }\
                    \
                    @media (max-width: 576px) {\
                        nav > .container {\
                            width: 100%;\
                        }\
                    }\
                    "}
                    </style>
                </head>
                <body>
                    <Navbar activeTab={this.props.activeTab} />
                    {this.props.children}
                    <div className="footer">
                        <div className="container">
                            <span className="copyright pull-right">
                                &copy; {year} Acme, Inc.
                            </span>
                            <ul className="links">
                                <li><a href="/">Home</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <script src="/public/core.min.js"></script>
                    {this.props.feet}
                </body>
            </html>
        );
    }
}

DefaultLayout.propTypes = propTypes;


module.exports = DefaultLayout;
