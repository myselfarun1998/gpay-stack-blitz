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
  Card,
} from 'react-bootstrap';
import check from '../img/check.png';

export default function Upisuccess() {
  const returnBack = () => {
    <Redirect to="/" />;
  };
  return (
    <div className="mybody">
      <h1>upu sucess</h1>

      <div className="card">
        <div className="test">
          <h1 className="paid">Paid succesfully</h1>
          <h1 className="amt">amt</h1>
          <h1 className="to">TO:</h1>
          <h1 className="trans">Transaction id:</h1>
        </div>
        <button className="close">close</button>
      </div>
      <img
        className="myimg"
        src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
      />
    </div>
  );
}
