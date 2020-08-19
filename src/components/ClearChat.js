import React, { Component } from 'react'
import Navigation from './Navigation'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class ClearChat extends Component {

    constructor(props) {
        super(props);
        this.userId = React.createRef();
        this.state = {
            result: [],
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let userId = this.userId.current.value;
        if (userId) {
            fetch(`https://chat-application-ofbusiness.herokuapp.com/chatlogs/${userId}`, {
                method: 'DELETE',
            })
                .then(res => res.json()) // or res.json()
                .then(result =>
                    this.setState({
                        result: result
                    }))

        }
        else {
            this.setState({
                result: []
            })
        }
    }
    render() {
        return (
            <div>
                <Navigation />
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicId">
                        <Form.Label>Enter User Id</Form.Label>
                        <Form.Control type="userId" placeholder="Enter User Id" ref={this.userId} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Delete Messages
                    </Button>
                </Form>

                {
                    Object.keys(this.state.result).length !== 0 ?
                        (
                            <h1>
                                {this.state.result.message}
                            </h1>
                        )
                        :
                        null
                }
            </div>
        )
    }
}