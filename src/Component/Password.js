import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './style.css';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
const Banksuccess = (props) => {
  const returnBack = () => {
    <Redirect to="/phone" />;
  };
  var count = 3;
  var valid = 'noerror';
  var defpwd = 'arun';
  var pwd = '';
  const [PassWord, setpassword] = useState();
  const [mypass1, setmypass1] = useState();
  const [mypass2, setmypass2] = useState();
  const [mypass3, setmypass3] = useState();

  const firstInput = (event) => {
    setpassword(event.target.value.toString());
  };
  console.log(PassWord);
  // ---------------
  const secondInput = (event) => {
    setmypass1(event.target.value.toString());
  };
  console.log(mypass1);
  // ---------------
  const thirdInput = (event) => {
    setmypass2(event.target.value.toString());
  };
  console.log(mypass2);
  // ---------------
  const fourthInput = (event) => {
    setmypass3(event.target.value.toString());
  };
  var pwd = PassWord + mypass1 + mypass2 + mypass3;
  console.log(pwd);
  const validation = () => {
    if (defpwd === pwd) {
      valid = 'noerror';
      // <Link to="/">{returnBack}</Link>;
      console.log(valid);
      console.log(pwd);
      setpassword(' ');
      setmypass1(' ');
      setmypass2(' ');
      setmypass3(' ');
    } else {
      valid = 'error';
      alert(`${--count}   attempts left`);
    }
  };
  return (
    <div>
      <h1 className="upitxt">Enter The UPI</h1>
      <Container className="container">
        <Row xs="auto" className="">
          <Col>
            <Form.Control
              className="input"
              minLength={1}
              maxLength={1}
              size="sm"
              type="password"
              value={PassWord}
              onChange={firstInput}
            />
          </Col>
          <Col>
            <Form.Control
              className="input"
              minLength={1}
              maxLength={1}
              size="sm"
              type="password"
              value={mypass1}
              onChange={secondInput}
            />
          </Col>
          <Col>
            <Form.Control
              className="input"
              minLength={1}
              maxLength={1}
              size="sm"
              type="password"
              value={mypass2}
              onChange={thirdInput}
            />
          </Col>
          <Col>
            <Form.Control
              className="input"
              minLength={1}
              maxLength={1}
              size="sm"
              type="password"
              value={mypass3}
              onChange={fourthInput}
            />
          </Col>
        </Row>
      </Container>
      <Button
        className="btn"
        variant="primary"
        type="submit"
        onClick={validation}
      >
        Submit
      </Button>
      {valid === 'error' && <div style={{ color: 'red' }}>incorrect</div>}
    </div>
  );
};
export default Banksuccess;
