import React, { useState, useEffect } from 'react';
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
  LanguageButton,
  Info,
} from "./styles"
import copyIcon from '../../assets/images/copy.png';
import batchData from './Data/BatchData';
import translations from './translations'; // Adjust the path as needed
import { useLocation } from 'react-router-dom'; // Import useLocation hook

const BatchOrders = () => {
  const location = useLocation(); // Use the useLocation hook to get the current location object

  const { batchName } = useParams();
  const [clickedButtons, setClickedButtons] = useState(Array(batchData[batchName].length).fill(false));
  const [language, setLanguage] = useState('en'); // Default to English

  const t = translations[language]; // Access translations based on the current language

  useEffect(() => {
    // Set language based on path whenever the location changes
    setLanguage(location.pathname.includes('/kakao') ? 'de' : 'en');
  }, [location]);

  const handleLanguageToggle = () => setLanguage(prevLang => prevLang === 'en' ? 'de' : 'en');

  const orders = batchData[batchName];

  if (!orders) {
    // If there's no data for the batch, you might want to redirect or show a message
    return <Container><Title>Batch not found</Title></Container>;
  }


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

  const askForUsername = () => {
    const message = "Hey Wilfredo, what's my username?";
    const whatsappUrl = `https://wa.me/+4915781295360?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };


  return (
    <Container>
      <LanguageButton onClick={handleLanguageToggle}>{t.languageButton}</LanguageButton>
      <Title>{t.batchOrders.title.replace("{batchName}", capitalizeFirstLetter(batchName))}</Title>
      <HighlightContainer>
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
        {orders.map((order, index) => (
          <OrderItem key={index}>
            <OrderHeader>
              {language === 'de'
                ? t.batchOrders.ordered
                  .replace("{username}", order.username)
                  .replace("{quantity}", order.quantity.toString())
                  .replace("Tafel", order.quantity > 1 ? "Tafeln" : "Tafel")
                : t.batchOrders.ordered
                  .replace("{username}", order.username)
                  .replace("{quantity}", order.quantity.toString())
                  .replace("(s)", order.quantity > 1 ? "s" : "")
              }
            </OrderHeader>

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
