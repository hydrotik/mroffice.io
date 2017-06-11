'use strict';

const React = require('react');
const $  = require('jquery');
const easing  = require('jquery-easing');
const scrollspy  = require('scrollspy');

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
                if(navbarExample.collapse) $('#navbarExample').collapse('hide');
            });
        });

    }

    componentWillUnmount() {   
    }



    render() {

        let istop = this.state.istop;


        const active = {
            position: 'absolute',
            top: '0',
            left: '0',
            opacity: '1'
        }

        const inactive = {
            position: 'absolute',
            top: '0',
            left: '0',
            opacity: '0'
        }

        const light = (istop) ? active : inactive;
        const dark = (!istop) ? active : inactive;

        return (
            <div className="lockup-logo" style={{position: 'relative', marginTop : '-16px', padding: '0'}}>
                <a href="#page-top">
                    <img src="/public/media/logo-header.png" width="102" height="32" style={dark} />
                    <img src="/public/media/logo-header-inverse.png" width="102" height="32" style={light} />
                </a>
            </div>
        );
    }
}


module.exports = NavBar;
