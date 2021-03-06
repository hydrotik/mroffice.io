'use strict';
const Actions = require('./actions');
const Alert = require('../components/alert.jsx');
const Button = require('../components/form/button.jsx');
const ControlGroup = require('../components/form/control-group.jsx');
const React = require('react');
const Spinner = require('../components/form/spinner.jsx');
const Store = require('./store');
const TextControl = require('../components/form/text-control.jsx');
const TextareaControl = require('../components/form/textarea-control.jsx');

const ReactGA = require('react-ga');

class Form extends React.Component {
    constructor(props) {

        super(props);

        this.input = {};
        this.state = Store.getState();
    }

    componentDidMount() {

        this.unsubscribeStore = Store.subscribe(this.onStoreChange.bind(this));

    }

    componentWillUnmount() {

        this.unsubscribeStore();
    }

    onStoreChange() {

        this.setState(Store.getState());
    }

    handleSubmit(event) {

        event.preventDefault();
        event.stopPropagation();

        ReactGA.event({
            category: 'Contact Form',
            action: 'Submitted by ' + this.input.email.value()
        });

        Actions.sendMessage({
            name: this.input.name.value(),
            email: this.input.email.value(),
            message: this.input.message.value()
        });
    }

    render() {

        let alert = [];

        if (this.state.success) {
            alert = <Alert
                type="success"
                message="Success. We have received your message."
            />;
        }
        else if (this.state.error) {
            alert = <Alert
                type="danger"
                message={this.state.error}
            />;
        }

        let formElements;

        if (!this.state.success) {
            formElements = <fieldset>
                <TextControl
                    ref={(c) => (this.input.name = c)}
                    name="name"
                    label="Your name"
                    hasError={this.state.hasError.name}
                    help={this.state.help.name}
                    disabled={this.state.loading}
                />
                <TextControl
                    ref={(c) => (this.input.email = c)}
                    name="email"
                    label="Your email"
                    hasError={this.state.hasError.email}
                    help={this.state.help.email}
                    disabled={this.state.loading}
                />
                <TextareaControl
                    ref={(c) => (this.input.message = c)}
                    name="message"
                    label="Message"
                    rows="5"
                    hasError={this.state.hasError.message}
                    help={this.state.help.message}
                    disabled={this.state.loading}
                />
                <input type="hidden" name="crumb" value="{{crumb}}"/>
                <ControlGroup hideLabel={true} hideHelp={true}>
                    <Button
                        type="submit"
                        inputClasses={{ 'btn-primary': true }}
                        disabled={this.state.loading}>
                        Send message
                    </Button>
                </ControlGroup>
            </fieldset>;
        }

        return (
                <form onSubmit={this.handleSubmit.bind(this)}>
                    {alert}
                    {formElements}
                </form>
        );
    }
}


module.exports = Form;