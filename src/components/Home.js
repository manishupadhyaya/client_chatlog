import React, { Component } from 'react'
import Navigation from './Navigation'

import { Card, ListGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Card>
                    <ListGroup>
                        <LinkContainer to="/getChat">
                            <ListGroup.Item action variant="dark">Get Chat Logs</ListGroup.Item>
                        </LinkContainer>
                        <LinkContainer to="/addMessage">
                            <ListGroup.Item action variant="dark">Add Messages</ListGroup.Item>
                        </LinkContainer>
                        <LinkContainer to="/clearChat">
                            <ListGroup.Item action variant="dark">Delete All Messages</ListGroup.Item>
                        </LinkContainer>
                        <LinkContainer to="/clearMessage">
                            <ListGroup.Item action variant="dark">Delete a Message</ListGroup.Item>
                        </LinkContainer>
                    </ListGroup>
                </Card>
            </div>
        )
    }
}