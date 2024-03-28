import React from 'react';
import { useParams } from 'react-router-dom';

const BatchOrders = ({ batchNumber }) => {
    const { number } = useParams(); // This matches :number in your route path

  const mockOrders = [
    { username: "RecklessCapybara", quantity: 2, paymentStatus: "unpaid", orderStatus: "not received" },
    { username: "WanderingAlpaca", quantity: 3, paymentStatus: "unpaid", orderStatus: "not received" },
    // Add more mock orders as needed
  ];

  const totalBarsOrdered = mockOrders.reduce((total, order) => total + order.quantity, 0);
  const isBatchReadyForProduction = totalBarsOrdered >= 10;

  return (
    <div>
      <h2>Batch {batchNumber} Orders</h2>
      <ul>
        {mockOrders.map((order, index) => (
          <li key={index}>{order.username} - {order.quantity} bars - Payment: {order.paymentStatus} - Order: {order.orderStatus}</li>
        ))}
      </ul>
      <div>Total bars ordered: {totalBarsOrdered}</div>
      <div>Status: {isBatchReadyForProduction ? "Production in progress" : "Waiting for orders to get to 10"}</div>
      <div>
        <p>To pay for your order, please use one of the following methods:</p>
        <p>PayPal: binancewil@protonmail.com</p>
        <p>Transfer:</p>
        <ul>
          <li>Name: YAHIR WILFREDO CASAS FARACH</li>
          <li>IBAN: DE87 1001 1001 2620 8897 48</li>
          <li>BIC: NTSBDEB1XXX</li>
        </ul>
      </div>
    </div>
  );
};

export default BatchOrders;
