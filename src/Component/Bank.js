import React from 'react';
import './style.css';
import { Component } from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';

class BankTransfer extends Component {
  constructor() {
    super();
    // this.formholderName = React.createRef();
    // this.formAccNo = React.createRef();
    // this.formIfscCode = React.createRef();
    // this.formBranchName = React.createRef();
    // this.formAmount = React.createRef();
    this.state = {
      todoList: [],
      accDetails: {
        holderName: '',
        accNo: '',
        ifsc: '',
        branch: '',
        amt: '',
      },
    };
  }
  returnBack = () => {
    <Redirect to="/" />;
  };
  addTodo = (event) => {
    event.preventDefault();
    const { holderName, accNo, ifsc, branch, amt } = this.state.accDetails;
    console.log(this.state.accDetails);

    if (!holderName || !accNo || !ifsc || !branch || !amt) {
      return alert('Fill all the details to save');
    }
    const newTodo = {
      holderName,
      accNo,
      ifsc,
      branch,
      amt,
      id: this.state.isEditMode ? this.state.editTodoId : Date.now().toString(),
    };
  };

  handleChangeValues = (e) => {
    this.setState((prev) => {
      return {
        ...prev,
        accDetails: { ...prev.accDetails, [e.target.name]: e.target.value },
      };
    });
  };

  render() {
    return (
      <div>
        <h1 className="banktext">Bank Transfer</h1>

        <Container>
          <Row>
            <Col>
              <Form className="phoneform" onSubmit={this.addTodo}>
                <Form.Group controlId="phoneform">
                  <Form.Label className="lab">
                    Enter The Account Holder Name
                  </Form.Label>
                  <Form.Control
                    className="form-control"
                    type="text"
                    value={this.state.accDetails.holderName}
                    onChange={this.handleChangeValues}
                    name="holderName"
                    ref={this.formholderName}
                  />
                </Form.Group>
                <Form.Group controlId="formAccNo">
                  <Form.Label className="lab">
                    Enter The Account Number
                  </Form.Label>
                  <Form.Control
                    className="form-control"
                    type="text"
                    value={this.state.accDetails.accNo}
                    onChange={this.handleChangeValues}
                    name="accNo"
                    minLength="10"
                    maxLength="10"
                    ref={this.formAccNo}
                  />
                  <div class="form-text">
                    We'll never share your Account Number with anyone else.
                  </div>
                </Form.Group>
                <Form.Group controlId="formIfscCode">
                  <Form.Label className="lab">Enter The IFSC Code</Form.Label>
                  <Form.Control
                    className="form-control"
                    type="text"
                    value={this.state.accDetails.ifsc}
                    onChange={this.handleChangeValues}
                    name="ifsc"
                    ref={this.formIfscCode}
                  />
                </Form.Group>

                <Form.Group controlId="formBranchName">
                  <Form.Label className="lab">Enter The Branch Name</Form.Label>
                  <Form.Control
                    className="form-control"
                    type="text"
                    value={this.state.accDetails.branch}
                    onChange={this.handleChangeValues}
                    name="branch"
                    ref={this.formBranchName}
                  />
                </Form.Group>
                <Form.Group controlId="formBranchName">
                  <Form.Label className="lab">
                    Enter The Amount To Pay
                  </Form.Label>
                  <Form.Control
                    className="form-control"
                    type="number"
                    value={this.state.accDetails.amt}
                    onChange={this.handleChangeValues}
                    name="amt"
                    ref={this.formAmount}
                  />
                </Form.Group>
                <Button
                  type="submit"
                  class="btn btn-primary"
                  className="phonebutton"
                >
                  {' '}
                  Pay Now
                </Button>
                <Link to="/">
                  {' '}
                  <Button
                    type="submit"
                    class="btn btn-primary"
                    className="dashboard"
                    onClick={this.returnBack}
                  >
                    {' '}
                    Return Back
                  </Button>{' '}
                </Link>
              </Form>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default BankTransfer;
