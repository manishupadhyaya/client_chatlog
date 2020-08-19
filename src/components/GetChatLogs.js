import React, { Component } from 'react'
import Navigation from './Navigation'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
export default class Home extends Component {

    constructor(props) {
        super(props);
        this.userId = React.createRef();
        this.limit = React.createRef();
        this.start = React.createRef();
        this.state = {
            result: [],
            totalSize: 0,
            page: 1,
            sizePerPage: 10,
        }
    }

    objToQueryString = ((obj) => {
        const keyValuePairs = [];
        for (const key in obj) {
            keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
        return keyValuePairs.join('&');
    })

    handleSubmit = (e) => {
        e.preventDefault();
        let userId = this.userId.current.value;
        let limit = this.limit.current.value;
        let start = this.start.current.value;
        const queryString = this.objToQueryString({
            limit, start
        })
        if (userId) {
            fetch(`https://chat-application-ofbusiness.herokuapp.com/chatlogs/${userId}?${queryString}`, { mode: 'cors' })
                .then(res => res.json())
                .then((result) => {
                    console.log(result)
                    this.setState({
                        result: result
                    })
                });
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
                    <Form.Group controlId="formBasicId">
                        <Form.Label>Enter Limit(Optional)</Form.Label>
                        <Form.Control type="string" placeholder="Enter Limit" ref={this.limit} />
                    </Form.Group>
                    <Form.Group controlId="formBasicId">
                        <Form.Label>Enter Start Position(Optional)</Form.Label>
                        <Form.Control type="string" placeholder="Enter Start Position" ref={this.start} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Get Chat Logs
                    </Button>
                </Form>
                {
                    this.state.result.length > 0 ?
                        (
                            <div>
                                <BootstrapTable
                                    data={this.state.result}
                                    fetchInfo={{ dataTotalSize: this.state.totalSize }}
                                    remote
                                    pagination
                                    striped
                                    hover
                                    condensed
                                >
                                    <TableHeaderColumn dataField="userId" isKey dataAlign="center">Id</TableHeaderColumn>
                                    <TableHeaderColumn dataField="message" dataAlign="center">Message</TableHeaderColumn>
                                    <TableHeaderColumn dataField="messageId" dataAlign="center">messageId</TableHeaderColumn>
                                    <TableHeaderColumn dataField="timeStamp" dataAlign="center">TimeStamp</TableHeaderColumn>
                                    <TableHeaderColumn dataField="isSent" dataAlign="center">isSent</TableHeaderColumn>
                                </BootstrapTable>
                            </div>
                        ) : null
                }
            </div>
        )
    }
}