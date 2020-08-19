import React, { Component } from 'react'
import Navigation from './Navigation'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class AddMessage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            result: [],
            totalSize: 0,
            page: 1,
            sizePerPage: 10,
            fields: {
                userId: React.createRef(),
                message: React.createRef(),
                timeStamp: React.createRef(),
                isSent: React.createRef()
            }
        }
    }

    getV(field) {
        return field.current.value;
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let [userId, message, timeStamp, isSent] = Object.keys(this.state.fields).map(
            field => this.state.fields[field].current.type === 'checkbox' ? this.state.fields[field].current.checked : this.state.fields[field].current.value
        );

        if (userId) {
            if (message) {
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ userId, message, isSent, timeStamp },
                        { mode: 'cors' })
                };

                fetch(`https://chat-application-ofbusiness.herokuapp.com/chatlogs/${userId}`, requestOptions)
                    .then(res => res.json())
                    .then((result) => {
                        console.log(result)
                        this.setState({
                            result
                        })
                    });
            }
        }
        else {
            this.setState({
                result: []
            })
        }
    }
    render() {
        const { userId, message, isSent, timeStamp } = this.state.fields;
        return (
            <div>
                <Navigation />
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicId">
                        <Form.Label>Enter User Id</Form.Label>
                        <Form.Control type="userId" placeholder="Enter User Id" ref={userId} />
                    </Form.Group>
                    <Form.Group controlId="formBasicId">
                        <Form.Label>Enter Message</Form.Label>
                        <Form.Control type="message" placeholder="Enter Message" ref={message} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Is Sent" ref={isSent} />
                    </Form.Group>
                    <Form.Group controlId="formBasicId">
                        <Form.Label>Enter Timestamp</Form.Label>
                        <Form.Control type="number" placeholder="Enter Timestamp" ref={timeStamp} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add Message
                    </Button>
                </Form>
                {
                    Object.keys(this.state.result).length !== 0 ?
                        (
                            <div>
                                {this.state.result.message}
                            </div>
                        )
                        : null
                }
            </div>
        )
    }
}