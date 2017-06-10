'use strict';
const ClassNames = require('classnames');
const PropTypes = require('prop-types');
const React = require('react');


const propTypes = {
    activeTab: PropTypes.string
};

class Navbar extends React.Component {
    tabClass(tab) {

        return ClassNames({
            active: this.props.activeTab === tab
        });
    }

    render() {

        return (
            <nav className={ClassNames('navbar', 'fixed-top', 'navbar-toggleable-md', 'navbar-light')} id="mainNav">
            <button className={ClassNames('navbar-toggler', 'navbar-toggler-right')} type="button" data-toggle="collapse" data-target="#navbarExample" aria-controls="navbarExample" aria-expanded="false" aria-label="Toggle navigation">
                Menu <i className={ClassNames('fa', 'fa-bars')}></i>
            </button>
            <div className="container">
                <a className="navbar-brand" href="#page-top">Start Bootstrap</a>
                <div className={ClassNames('collapse', 'navbar-collapse')} id="navbarExample">
                    <ul className={ClassNames('navbar-nav', 'ml-auto')}>
                        <li className="nav-item">
                            <a className="nav-link" href="#download">Download</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#features">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        );
    }
}

Navbar.propTypes = propTypes;


module.exports = Navbar;
