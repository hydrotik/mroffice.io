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
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <link rel="stylesheet" href="/public/media/font-awesome/css/font-awesome.min.css" />
                    <link rel="stylesheet" href="/public/media/simple-line-icons/css/simple-line-icons.css" />
                    <link rel="stylesheet" href="/public/core.min.css" />
                    <link rel="stylesheet" href="/public/layouts/default.min.css" />
                    <link rel="shortcut icon" href="/public/media/favicon.ico" />
                    <link rel="stylesheet" href="/public/media/device-mockups/device-mockups.min.css" />
                    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet" />
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
                <body id="page-top">
                    <Navbar activeTab={this.props.activeTab} />
                    {this.props.children}
                    <footer>
                        <div className="container">
                            <p>&copy; 2017 Start Bootstrap. All Rights Reserved.</p>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a href="#">Privacy</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">Terms</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">FAQ</a>
                                </li>
                            </ul>
                        </div>
                    </footer>
                    <script src="/public/core.min.js"></script>
                    {this.props.feet}

                    <script src="/public/media/vendor/jquery/jquery.min.js"></script>
                    <script src="/public/media/vendor/tether/tether.min.js"></script>
                    <script src="/public/media/vendor/bootstrap/bootstrap.min.js"></script>
                </body>
            </html>
        );
    }
}

DefaultLayout.propTypes = propTypes;


module.exports = DefaultLayout;
