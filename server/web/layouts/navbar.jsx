'use strict';
const ClassNames = require('classnames');
const PropTypes = require('prop-types');
const React = require('react');
const Scroll  = require('react-scroll');
const Link       = Scroll.Link;
const Element    = Scroll.Element;
const Events     = Scroll.Events;
const scroll     = Scroll.animateScroll;
const scrollSpy  = Scroll.scrollSpy;

const propTypes = {
    activeTab: PropTypes.string
};

class Navbar extends React.Component {
    tabClass(tab) {

        return ClassNames({
            active: this.props.activeTab === tab
        });
    }

    componentDidMount() {

        Events.scrollEvent.register('begin', function(to, element) {
          console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function(to, element) {
          console.log("end", arguments);
        });

        scrollSpy.update();

    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    scrollToBottom() {
        scroll.scrollToBottom();
    }

    scrollTo() {
        scroll.scrollTo(100);
    }

    scrollMore() {
        scroll.scrollMore(100);
    }

    handleSetActive(to) {
        console.log(to);
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
                                <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                                    Test 1
                                </Link>
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
