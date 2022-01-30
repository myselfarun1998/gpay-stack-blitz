import React from 'react';
import './style.css';
import { Link, Redirect } from 'react-router-dom';
import {
  Button,
  Form,
  Container,
  FloatingLabel,
  Row,
  Col,
} from 'react-bootstrap';

export default function Upi() {
  const returnBack = () => {
    <Redirect to="/" />;
  };
  return (
    <div>
      <h1 className="upitransfer">UPI Transfer</h1>

      <Container>
        <Row>
          <Col>
            <form className="phoneform">
              <div class="mb-3">
                <label class="form-label">Enter The Name</label>
                <input type="text" class="form-control" />
              </div>
              <div class="mb-3">
                <label class="form-label">Enter The UPI</label>
                <input
                  type="tel"
                  class="form-control"
                  minLength="10"
                  maxLength="10"
                />
                <div class="form-text">
                  We'll never share your Phone Number with anyone else.
                </div>
              </div>

              <div class="mb-3">
                <label class="form-label">Enter The Amount To Pay</label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <button
                type="submit"
                class="btn btn-primary"
                className="bankbutton"
              >
                Pay Now
              </button>
              <Link to="/">
                {' '}
                <button
                  type="submit"
                  class="btn btn-primary"
                  className="dashboard"
                  onClick={returnBack}
                >
                  Return Back
                </button>
              </Link>
            </form>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
