import React from 'react';
import './style.css';
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {
  Button,
  Form,
  Container,
  FloatingLabel,
  Row,
  Col,
} from 'react-bootstrap';

export default function Phone() {
  const [phoneInput, setPhoneInput] = useState({
    name: '',
    phone: '',
    amt: '',
  });

  const nameHandle = (event) => {
    setPhoneInput((prev) => {
      return { ...prev, name: event.target.value };
    });
  };
  const phoneHandle = (event) => {
    setPhoneInput((prev) => {
      return { ...prev, phone: event.target.value };
    });
  };

  const amtHandle = (event) => {
    setPhoneInput((prev) => {
      return { ...prev, amt: event.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(phoneInput);
  };

  const returnBack = () => {
    <Redirect to="/" />;
  };
  return (
    <div>
      <h1 className="phonetxt">phone Transfer</h1>

      <Container>
        <Row>
          <Col>
            <form className="phoneform" onSubmit={handleSubmit}>
              <div class="mb-3">
                <label class="form-label">Enter The Name</label>
                <input
                  type="text"
                  class="form-control"
                  value={phoneInput.name}
                  onChange={nameHandle}
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Enter The Phone Number</label>
                <input
                  type="tel"
                  class="form-control"
                  minLength="10"
                  maxLength="10"
                  value={phoneInput.phone}
                  onChange={phoneHandle}
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
                  value={phoneInput.amt}
                  onChange={amtHandle}
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
                  onClick={returnBack}
                  type="submit"
                  class="btn btn-primary"
                  className="dashboard"
                >
                  Return Back
                </button>{' '}
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
