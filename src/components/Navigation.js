import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'

export default class Navigation extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <LinkContainer to="/home">
                    <Navbar.Brand>
                        Home
                        </Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/getChat">
                            <Nav.Link>Get Chat Logs</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/addMessage">
                            <Nav.Link>Add Messages</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/clearChat">
                            <Nav.Link>Delete All Messages</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/clearMessage">
                            <Nav.Link>Delete a Message</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        )
    }
}