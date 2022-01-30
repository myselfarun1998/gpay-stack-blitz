import React from 'react';
import './style.css';
import { Link, Redirect } from 'react-router-dom';
import React, { useState } from 'react';
import {
  Button,
  Form,
  Container,
  FloatingLabel,
  Row,
  Col,
} from 'react-bootstrap';

export default function Upi() {
  const [userUpi, setUpi] = useState({
    name1: '',
    upi: '',
    amt: '',
  });
  const returnBack = () => {
    <Redirect to="/" />;
  };
  // const [userUpi, setUpi] = useState({
  //   name1: '',
  //   upi: ' ',
  //   amt: ' ',
  // });

  const nameHandler = (event) => {
    setUpi((prev) => {
      return { ...prev, name1: event.target.value };
    });
  };
  const upiHandler = (event) => {
    setUpi((prev) => {
      return { ...prev, upi: event.target.value };
    });
  };

  const amtHandle = (event) => {
    setUpi((prev) => {
      return { ...prev, amt: event.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userUpi);
  };

  return (
    <div>
      <h1 className="upitransfer">UPI Transfer</h1>

      <Container>
        <Row>
          <Col>
            <form className="phoneform" onSubmit={handleSubmit}>
              <div class="mb-3">
                <label class="form-label">Enter The Name</label>
                <input
                  type="text"
                  class="form-control"
                  value={userUpi.name}
                  onChange={nameHandler}
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Enter The UPI</label>
                <input
                  type="tel"
                  class="form-control"
                  minLength="10"
                  maxLength="10"
                  value={userUpi.upi}
                  onChange={upiHandler}
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
                  onChange={amtHandle}
                  value={userUpi.amt}
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
