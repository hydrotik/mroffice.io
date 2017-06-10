'use strict';
const Layout = require('../layouts/default.jsx');
const Package = require('../../../package.json');
const React = require('react');
const ClassNames = require('classnames');


class LandingPage extends React.Component {
    render() {

        const neck = (
                <link rel='stylesheet' href="/public/pages/new-age.min.css" />
        );

        return (
            <Layout
                title="New Page"
                neck={neck}
                activeTab="home">

                
                <header className="masthead">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-7">
                                <div className="header-content">
                                    <div className="header-content-inner">
                                        <h1>New Age is an app landing page that will help you beautifully showcase your new mobile app, or anything else!</h1>
                                        <a href="#download" className="btn btn-outline btn-xl">Start Now for Free!</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-5">
                                <div className="device-container">
                                    <div className={ClassNames('device-mockup', 'iphone6_plus', 'portrait white')}>
                                        <div className="device">
                                            <div className="screen">

                                                <img src="/public/media/demo-screen-1.jpg" className="img-fluid" alt="" />
                                            </div>
                                            <div className="button">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section className={ClassNames('download', 'bg-primary', 'text-center')} id="download">
                    <div className="container">
                        <div className="row">
                            <div className={ClassNames('col-md-8', 'offset-md-2')}>
                                <h2 className="section-heading">Discover what all the buzz is about!</h2>
                                <p>Our app is available on any mobile device! Download now to get started!</p>
                                <div className="badges">
                                    <a className="badge-link" href="#"><img src="/public/media/google-play-badge.svg" alt="" /></a>
                                    <a className="badge-link" href="#"><img src="/public/media/app-store-badge.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="features" id="features">
                    <div className="container">
                        <div className={ClassNames('section-heading', 'text-center')}>
                            <h2>Unlimited Features, Unlimited Fun</h2>
                            <p className="text-muted">Check out what you can do with this app theme!</p>
                            <hr />
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="device-container">
                                    <div className={ClassNames('device-mockup', 'iphone6_plus', 'portrait white')}>
                                        <div className="device">
                                            <div className="screen">

                                                <img src="/public/media/demo-screen-1.jpg" className="img-fluid" alt="" /> </div>
                                            <div className="button">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="feature-item">
                                                <i className={ClassNames('icon-screen-smartphone', 'text-primary')}></i>
                                                <h3>Device Mockups</h3>
                                                <p className="text-muted">Ready to use HTML/CSS device mockups, no Photoshop required!</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="feature-item">
                                                <i className={ClassNames('icon-camera', 'text-primary')}></i>
                                                <h3>Flexible Use</h3>
                                                <p className="text-muted">Put an image, video, animation, or anything else in the screen!</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="feature-item">
                                                <i className={ClassNames('icon-present', 'text-primary')}></i>
                                                <h3>Free to Use</h3>
                                                <p className="text-muted">As always, this theme is free to download and use for any purpose!</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="feature-item">
                                                <i className={ClassNames('icon-lock-open', 'text-primary')}></i>
                                                <h3>Open Source</h3>
                                                <p className="text-muted">Since this theme is MIT licensed, you can use it commercially!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cta">
                    <div className="cta-content">
                        <div className="container">
                            <h2>Stop waiting.<br />Start building.</h2>
                            <a href="#contact" className={ClassNames('btn', 'btn-outline', 'btn-xl')}>Let's Get Started!</a>
                        </div>
                    </div>
                    <div className="overlay"></div>
                </section>

                <section className={ClassNames('contact', 'bg-primary')} id="contact">
                    <div className="container">
                        <h2>We <i className={ClassNames('fa', 'fa-heart')}></i> new friends!</h2>
                        <ul className={ClassNames('list-inline', 'list-social')}>
                            <li className={ClassNames('list-inline-item', 'social-twitter')}>
                                <a href="#"><i className={ClassNames('fa', 'fa-twitter')}></i></a>
                            </li>
                            <li className={ClassNames('list-inline-item', 'social-facebook')}>
                                <a href="#"><i className={ClassNames('fa', 'fa-facebook')}></i></a>
                            </li>
                            <li className={ClassNames('list-inline-item', 'social-google-plus')}>
                                <a href="#"><i className={ClassNames('fa', 'fa-google-plus')}></i></a>
                            </li>
                        </ul>
                    </div>
                </section>
            </Layout>
        );
    }
}


module.exports = LandingPage;
