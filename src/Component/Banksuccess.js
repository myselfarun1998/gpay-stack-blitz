import React from 'react';
import './style.css';
import { Link, Redirect, useLocation } from 'react-router-dom';
import {
  Button,
  Form,
  Container,
  FloatingLabel,
  Row,
  Col,
  Card,
} from 'react-bootstrap';
import check from '../img/check.png';

const Banksuccess = (props) => {
  const location = useLocation();
  let trasId = Math.floor(100000 + Math.random() * 9927789000);
  let val = location.state;
  const returnBack = () => {
    <Redirect to="/" />;
  };
  return (
    <div className="mybody">
      <h1>Bank success</h1>

      <div className="card">
        <div className="test">
          <h1 className="paid">Paid succesfully</h1>
          <h1 className="amt">amt{val.amt}</h1>
          <h1 className="to">TO:{val.holderName}</h1>
          <h1 className="trans">Transaction id:{trasId}</h1>
        </div>
        <Link to="/home">
          {' '}
          <button className="close">close</button>
        </Link>
      </div>
      <img
        className="myimg"
        src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
      />
    </div>
  );
};
export default Banksuccess;
