'use strict';

const React = require('react');
const $  = require('jquery');
const easing  = require('jquery-easing');
const scrollspy  = require('scrollspy');

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

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

            $(window).scroll(function() {
                if ($("#mainNav").offset().top > 100) {
                    $("#mainNav").addClass("navbar-shrink");
                } else {
                    $("#mainNav").removeClass("navbar-shrink");
                }
            });

            $('#navbarExample>ul>li>a').click(function() {
                const navbarExample = $('#navbarExample');
                if(navbarExample.collapse) $('#navbarExample').collapse('hide');
            });
        });

    }

    componentWillUnmount() {   
    }

    componentWillUnmount() {
    }


    render() {
        return (
            <a className="navbar-brand" href="#page-top">Start Bootstrap</a>
        );
    }
}


module.exports = NavBar;
