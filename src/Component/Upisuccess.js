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

export default function Upisuccess(props) {
  const location = useLocation();
  let val = location.state;
  let transaction = Math.floor(100000 + Math.random() * 998777900000);
  console.log(location.state);
  return (
    <div className="mybody">
      <h1>upu sucess</h1>

      <div className="card">
        <div className="test">
          <h1 className="paid">Paid succesfully</h1>
          <h1 className="amt">Amount:{val.amt}</h1>
          <h1 className="to">TO:{val.name}</h1>
          <h1 className="trans">Transaction id:{transaction}</h1>
        </div>
        <Link to="/home">
          <button className="close">close</button>
        </Link>
      </div>
      <img
        className="myimg"
        src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
      />
    </div>
  );
}
