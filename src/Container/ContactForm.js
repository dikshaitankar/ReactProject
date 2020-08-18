import React, { Component } from 'react';
import FormInput from '../Component/ContactForm/Input';
import { Button, Form, Label, Row, Col, Container, FormGroup } from 'reactstrap';

class ContactForm extends Component {
    state = {
        contactForm: {
            FullName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Name'
                },
                value: '',
                validation: {
                    required: true                      
                },
                valid: false
            },
            Email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Enter E-mail'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            Address: {
                elementType: 'textarea',
                elementConfig: {
                    rows: '2',
                    placeholder: 'Address'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            Contact: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Mobile'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            Designation: {
                elementType: 'select',
                elementConfig: {
                    option: [{
                        value: 'frontend',
                        label: 'Front End'
                    }, {
                        value: 'backend',
                        label: 'Back End'
                    }, {
                        value: 'database',
                        label: 'Database'
                    }, {
                        value: 'tester',
                        label: 'Tester'
                    }]
                },
                value: ''
            }
        }
    }
    checkValidity = (value, rule) => {
        let isValid = false;
        if (rule.required)
           isValid = value !== '';
        return isValid;
    }

    changeHandler = (event, identifier) => {
        const formData = {
            ...this.state.contactForm
        }
        const updatedFormData = {
            ...formData[identifier]
        }
        updatedFormData.value = event.target.value;
        updatedFormData.validation.valid = this.checkValidity(updatedFormData.value, updatedFormData.validation);
        formData[identifier] = updatedFormData;
        this.setState({
            contactForm: formData
        });
        console.log(this.state)
    }
    render() {
        const contactFormArray = [];
        for (let key in this.state.contactForm) {
            contactFormArray.push({
                id: key,
                config: this.state.contactForm[key]
            })
        }
        return (

            <Container>
                <Form autoComplete="off">
                    {
                        contactFormArray.map((data, i) =>
                            <FormGroup key={data.id}>
                                <Row>
                                    <Col sm="2"><Label for="exampleEmail">{data.id}</Label></Col>
                                    <FormInput
                                        elementType={data.config.elementType}
                                        elementConfig={data.config.elementConfig}
                                        value={data.config.value}
                                        invalid={!data.config.valid}
                                        setrequired={data.config.validation}
                                        change={(event) => this.changeHandler(event, data.id)}></FormInput>
                                </Row>
                            </FormGroup>

                        )
                    }
                    <Button color="warning" type="button">Submit</Button>
                </Form>
            </Container>
        )
    }
}

export default ContactForm;