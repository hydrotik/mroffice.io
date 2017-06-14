'use strict';

const React = require('react');
const $  = require('jquery');
const easing  = require('jquery-easing');
const scrollspy  = require('scrollspy');
const ClassNames = require('classnames');

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            istop: true
        };

        this.handleScroll = this.handleScroll.bind(this)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', (e) => this.handleScroll(e));
    }

    handleScroll(event){

        let i;

        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
            i = false;
        } else {
            $("#mainNav").removeClass("navbar-shrink");
            i = true;
        }

        this.setState({
          istop: i
        });
    }

    componentDidMount() {

        window.addEventListener('scroll', this.handleScroll);


        // GET THIS ALL OUT OF JQUERY!!!

        $( document ).ready(function() {

            /*$('body').scrollspy({
                target: '#mainNav',
                offset: 54
            });*/

             $('a[href*="#"]:not([href="#"])').click(function() {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html, body').animate({
                            scrollTop: (target.offset().top - 48)
                        }, 1000, "easeInOutExpo");
                        return false;
                    }
                }
            });

            /*

            $(window).scroll(function() {
                if ($("#mainNav").offset().top > 100) {
                    $("#mainNav").addClass("navbar-shrink");
                    this.props.istop = false;
                } else {
                    $("#mainNav").removeClass("navbar-shrink");
                    this.props.istop = true;
                }
            });
            */


            $('#navbarExample>ul>li>a').click(function() {

                const navbarExample = $('#navbarExample');
                if(navbarExample.hasClass('show')) {
                    $('#navbarExample').removeClass('show');

                }
            });
        });

    }

    componentWillUnmount() {   
    }



    render() {

        return (
            <div className="lockup"><span className={ClassNames('icon-logo')}></span> <span><a href="#page-top">mroffice.io</a></span></div>
        );
    }
}


module.exports = NavBar;
