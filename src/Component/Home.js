import React from 'react';
import './style.css';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import phone from '../img/smartphone.png';
// import bank from '../img/bank.png';
// import upi from '../img/barcode.png';
const Home = () => {
  return (
    <div>
      <Row className="bor">
        <Col>
          {' '}
          <Link to="/phone">
            {' '}
            <img
              className="img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRj7v-Vbr4dAULfNb-ITMta63HRLMN7h-FDw&usqp=CAU"
            />{' '}
          </Link>
        </Col>
        <Col>
          <Link to="/bank">
            {' '}
            <img
              className="img"
              src="https://i.pinimg.com/736x/2c/1d/86/2c1d862b192eec296fcb2a3fd7fe820b.jpg"
            />{' '}
          </Link>
        </Col>
        <Col>
          <Link to="/upi">
            {' '}
            <img
              className="img"
              src="https://w7.pngwing.com/pngs/506/620/png-transparent-qr-code-barcode-scanners-scanner-scan-miscellaneous-angle-text.png"
            />
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
