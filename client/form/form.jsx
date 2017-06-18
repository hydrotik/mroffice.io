'use strict';

const React = require('react');
//const Formsy = require('formsy-react');
const ClassNames = require('classnames');
import { Form, Text } from 'react-form';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
    }

    componentDidMount() {
    }

    componentWillUnmount() {   
    }



    render() {

        return (
            <Form
                onSubmit={(values) => {
                  console.log('Success!', values)
                }}
                validate={({ name }) => {
                  return {
                    name: !name ? 'A name is required' : undefined
                  }
                }}
              >
                {({submitForm}) => {
                  return (
                    <form onSubmit={submitForm}>
                      <Text field='name' />
                      <button className={ClassNames('btn', 'btn-outline', 'btn-xl')} type='submit'>Submit</button>
                    </form>
                  )
                }}
              </Form>
        );
    }
}


module.exports = ContactForm;
