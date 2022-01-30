import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './style.css';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
const PassWord = (props) => {
  const history = useHistory();
  const location = useLocation();
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
  // ---------------
  const secondInput = (event) => {
    setmypass1(event.target.value.toString());
  };
  // ---------------
  const thirdInput = (event) => {
    setmypass2(event.target.value.toString());
  };
  // ---------------
  const fourthInput = (event) => {
    setmypass3(event.target.value.toString());
  };
  var pwd = PassWord + mypass1 + mypass2 + mypass3;
  console.log(pwd);
  const validation = () => {
    if (defpwd === pwd) {
      valid = 'noerror';
      setpassword(' ');
      setmypass1(' ');
      setmypass2(' ');
      setmypass3(' ');
      if (location.state) {
        console.log(location.state.data);
        console.log(location.state.val);
        if (location.state.data === 'bank') {
          history.push({
            pathname: '/banksuccess',
            state: location.state.val,
          });
          // history.push("/banksuccess");
        } else if (location.state.data === 'phone') {
          history.push({
            pathname: '/phonesuccess',
            state: location.state.val,
          });
        }
      } else {
        history.push('/home');
      }
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
export default PassWord;
