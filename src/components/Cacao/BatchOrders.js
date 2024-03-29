import React, { useState, useEffect } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';

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
  NormalButton,
  OrderDateText,
  Subtitle,
  Info,
  UserNameAndQuantity,
  HomeButton,
  OrderHeaderText
} from "./styles"
import copyIcon from '../../assets/images/copy.png';
import batchData from './Data/BatchData';
import translations from './translations'; // Adjust the path as needed
import moment from 'moment'; // Import Moment.js
import 'moment/locale/de'  // without this line it didn't work

const BatchOrders = () => {
  const location = useLocation(); // Use the useLocation hook to get the current location object
  const { batchName } = useParams();
  const batch = batchData[batchName];
  const [language, setLanguage] = useState('en'); // Default to English
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const t = translations[language]; // Access translations based on the current language
  const [clickedButtons, setClickedButtons] = useState([]);


  useEffect(() => {
    // Set language based on path whenever the location changes
    setLanguage(location.pathname.includes('/kakao') ? 'de' : 'en');
  }, [location]);

  const handleLanguageToggle = () => setLanguage(prevLang => prevLang === 'en' ? 'de' : 'en');

  useEffect(() => {
    // Update moment locale when language changes
    moment.locale(language === 'de' ? 'de' : 'en');
    // Initialize or update orders based on batch
    if (batch) {
      const updatedOrders = batch.map(order => ({
        ...order,
        orderDateFromNow: moment(order.orderDate, "DD/MM/YY").fromNow()
      }));
      setOrders(updatedOrders);
      // Also update clickedButtons based on the batch length
      setClickedButtons(Array(batch.length).fill(false));
    }
  }, [batch, language]);


  if (!batch) {
    // Here you handle the case where the batch does not exist
    // You could also use a redirect here instead of rendering a message
    return (
      <Container>
        <Title>Batch not found</Title>
      </Container>
    );
  }

  const navigateToHomePage = () => {
    // Determine the homepage URL based on the current language
    const homepageURL = language === 'de' ? '/kakao' : '/cacao';
    // Use the navigate function to navigate
    navigate(homepageURL);
  };

  const totalBarsOrdered = orders.reduce((total, order) => total + order.quantity, 0);
  const barsNeededForProduction = 10;
  const remainingBarsNeeded = barsNeededForProduction - totalBarsOrdered;
  const isBatchReadyForProduction = remainingBarsNeeded <= 0;

  const copyReferralLinkToClipboard = (referralLink, index) => {
    navigator.clipboard.writeText(referralLink).then(() => {
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

  const sortedOrders = orders.sort((a, b) => moment(b.orderDate, "DD/MM/YY") - moment(a.orderDate, "DD/MM/YY"));

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
      <HomeButton onClick={navigateToHomePage}>{t.batchOrders.goToHomePage}</HomeButton>
      <NormalButton onClick={handleLanguageToggle}>{t.languageButton}</NormalButton>
      <Title>{t.batchOrders.title}</Title>
      <Info>
        {t.batchOrders.introInfo}
      </Info>

      <HighlightContainer>
        <Subtitle>{t.batchOrders.overview}</Subtitle>
        <Info>{t.batchOrders.batchNameLine.replace("{batchName}", capitalizeFirstLetter(batchName))}</Info>
        <Info>
          {t.batchOrders.totalBarsOrdered.replace("{totalBarsOrdered}", totalBarsOrdered)}
        </Info>
        <Info>
          {t.batchOrders.goal}
        </Info>
        <Info>
          {isBatchReadyForProduction ? t.batchOrders.statusReady : t.batchOrders.statusNotReady.replace("{remainingBarsNeeded}", remainingBarsNeeded).replace("(s)", remainingBarsNeeded > 1 ? "s" : "")}
        </Info>
      </HighlightContainer>
      <OrderList>
        <Subtitle>{t.batchOrders.orders}</Subtitle>
        {sortedOrders.map((order, index) => (
          <OrderItem key={index}>
            <OrderHeader>
              {language === 'de'
                ? <>
                  <UserNameAndQuantity>
                    {order.username} {order.quantity.toString()} {order.quantity > 1 ? "Tafeln" : "Tafel"}
                  </UserNameAndQuantity>
                  <OrderHeaderText>{t.batchOrders.orderedText}</OrderHeaderText>
                </>
                : <>
                  <UserNameAndQuantity>
                    {order.username} ordered {order.quantity.toString()} {order.quantity > 1 ? "bars" : "bar"}
                  </UserNameAndQuantity>
                  <OrderHeaderText>{t.batchOrders.orderedText}</OrderHeaderText>
                </>
              }
            </OrderHeader>
            <OrderDateText>
              {t.batchOrders.orderDate.replace("{orderDateFromNow}", order.orderDateFromNow)}
            </OrderDateText>
            <OrderText>
              {t.batchOrders.paymentStatus.replace("{paymentStatus}", order.paymentStatus || "unpaid")}
            </OrderText>
            <OrderText>
              {t.batchOrders.orderStatus.replace("{orderStatus}", order.orderStatus)}
            </OrderText>
            <CopyButton
              onClick={() => {
                // Determine the base URL based on the environment
                const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://wilfredocasas.com';
                // Determine the path based on the current language
                const path = language === 'de' ? '/kakao' : '/cacao'; // Use the 'language' state directly
                console.log("path", path)
                // Construct the referral link
                const referralLink = `${baseURL}${path}?referral=${order.username}&batch=${batchName}`;
                // Call the existing function to copy the referral link to the clipboard
                copyReferralLinkToClipboard(referralLink, order, index);
              }}
              className={clickedButtons[index] ? 'clicked' : ''}
            >
              <img src={copyIcon} alt={t.batchOrders.copyReferralLink} />
              {t.batchOrders.copyReferralLink}
            </CopyButton>

          </OrderItem>
        ))}
        <InfoText>
          {t.batchOrders.referralLinkInfo}
        </InfoText>
      </OrderList>
      <PaymentInfo>
        <Title>{t.batchOrders.paymentInstructions}</Title>
        <InfoText>{t.batchOrders.paymentInstructions}</InfoText>
        <PaymentMethodList>
          <PaymentMethodItem>
            <PaymentDetails>
              <AccountDetail><strong>{t.batchOrders.paypalInfo.split(':')[0]}:</strong> {t.batchOrders.paypalInfo.split(':')[1]}</AccountDetail>
            </PaymentDetails>
            <CopyTextButton onClick={() => copyPaymentDetailsToClipboard(t.batchOrders.paypalInfo.split(':')[1])}>
              <img src={copyIcon} alt="Copy" />
              {t.batchOrders.copyButton}
            </CopyTextButton>
          </PaymentMethodItem>
          <PaymentMethodItem>
            <PaymentDetails>
              <AccountDetail><strong>{t.batchOrders.transferInfo}:</strong></AccountDetail>
              <AccountDetail>{t.batchOrders.accountName}</AccountDetail>
              <AccountDetail>{t.batchOrders.iban}</AccountDetail>
            </PaymentDetails>
            <CopyTextButton onClick={() => copyPaymentDetailsToClipboard(t.batchOrders.iban)}>
              <img src={copyIcon} alt="Copy" />
              {t.batchOrders.copyButton}
            </CopyTextButton>
          </PaymentMethodItem>
        </PaymentMethodList>
      </PaymentInfo>
    </Container>
  );
};

export default BatchOrders;
