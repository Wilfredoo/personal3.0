import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  OrderList,
  OrderItem,
  HighlightContainer,
  PaymentInfo,
  Container,
  Title,
  InfoText,
  OrderHeader,
  OrderText,
  CopyButton,
  CopyTextButton,
  PaymentMethodList,
  PaymentMethodItem,
  PaymentDetails,
  AccountDetail,
  EmphasizedTextHeader,
  Info,
  EmphasizedText
} from "./styles"
import copyIcon from '../../assets/images/copy.png';

const batchData = {
  capybara: [
    { username: "RecklessCapybara", quantity: 1, orderStatus: "not received" },
    { username: "WanderingCapybara", quantity: 3, orderStatus: "not received" },
  ],
};

const BatchOrders = () => {

  const { batchName } = useParams();
  const [clickedButtons, setClickedButtons] = useState(Array(batchData[batchName].length).fill(false));

  const orders = batchData[batchName];

  if (!orders) {
    // If there's no data for the batch, you might want to redirect or show a message
    return <Container><Title>Batch not found</Title></Container>;
  }

  const totalBarsOrdered = orders.reduce((total, order) => total + order.quantity, 0);
  const isBatchReadyForProduction = totalBarsOrdered >= 10;

  const copyReferralLinkToClipboard = (text, order, index) => {
    const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://wilfredocasas.com'; // Change the production URL accordingly

    navigator.clipboard.writeText(`${baseURL}/cacao?referral=${order.username}&batch=${batchName}`).then(() => {
      // Handle success (show a message, etc.)
      const updatedClickedButtons = [...clickedButtons];
      updatedClickedButtons[index] = true;
      setClickedButtons(updatedClickedButtons);
      setTimeout(() => {
        const resetClickedButtons = [...clickedButtons];
        resetClickedButtons[index] = false;
        setClickedButtons(resetClickedButtons);
      }, 500); // Reset the state after 500 milliseconds
    }, (err) => {
      // Handle failure (possibly notify the user that the copy failed)
      console.error('Failed to copy: ', err);
    });
  };

  const copyPaymentDetailsToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      // Handle success (show a message, etc.)
      console.log('Payment details copied to clipboard');
    }, (err) => {
      // Handle failure (possibly notify the user that the copy failed)
      console.error('Failed to copy payment details: ', err);
    });
  };
  


  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  return (
    <Container>
      <Title>Batch {capitalizeFirstLetter(batchName)}</Title>
      <OrderList>
        {orders.map((order, index) => (
          <OrderItem key={index}>
            <OrderHeader>
              <EmphasizedTextHeader>{order.username}</EmphasizedTextHeader> ordered <EmphasizedTextHeader>{order.quantity}</EmphasizedTextHeader> serious bar{order.quantity > 1 ? "s" : ""} of chocolate
            </OrderHeader>
            <OrderText>Payment status: {order.paymentStatus || "unpaid"}</OrderText>
            <OrderText>Order: {order.orderStatus}</OrderText>
            <CopyButton
              onClick={() => copyReferralLinkToClipboard(`http://localhost:3000/cacao?referral=${order.username}&batch=${batchName}`, order, index)}
              className={clickedButtons[index] ? 'clicked' : ''}
            >
              <img src={copyIcon} alt="Copy" />
              Referral Link
            </CopyButton>

          </OrderItem>
        ))}
      </OrderList>
      <HighlightContainer>
        <Info>
          Total bars ordered: <EmphasizedText>{totalBarsOrdered}</EmphasizedText>
        </Info>
        <Info>
          Status: <EmphasizedText>{isBatchReadyForProduction ? "Production in progress" : "Waiting for 10 bar orders to start production"}</EmphasizedText>
        </Info>
        <Info>
          Share the referral link next to your username with friends to help us reach the 10 bar goal faster. Plus, you'll receive a free bar for every new user who places an order using your username.  </Info>
      </HighlightContainer>

      <PaymentInfo>
        <Title>Payment Instructions</Title>
        <InfoText>To pay for your order, please use one of the following methods:</InfoText>
        <PaymentMethodList>
          <PaymentMethodItem>
            {/* <PaymentIcon>🅿️</PaymentIcon> */}
            <PaymentDetails>
              <AccountDetail><strong>PayPal:</strong> binancewil@protonmail.com</AccountDetail>
            </PaymentDetails>
            <CopyTextButton onClick={() => copyPaymentDetailsToClipboard('binancewil@protonmail.com')}>
              <img src={copyIcon} alt="Copy" />
              Copy
            </CopyTextButton>
          </PaymentMethodItem>
          <PaymentMethodItem>
            {/* <PaymentIcon>💳</PaymentIcon> */}
            <PaymentDetails>
              <AccountDetail><strong>Transfer:</strong></AccountDetail>
              <AccountDetail>Name: YAHIR WILFREDO CASAS FARACH</AccountDetail>
              <AccountDetail>IBAN: DE87 1001 1001 2620 8897 48</AccountDetail>
            </PaymentDetails>
            <CopyTextButton onClick={() => copyPaymentDetailsToClipboard('DE87 1001 1001 2620 8897 48')}>
              <img src={copyIcon} alt="Copy" />
              Copy
            </CopyTextButton>
          </PaymentMethodItem>
        </PaymentMethodList>
      </PaymentInfo>
    </Container>
  );
};

export default BatchOrders;