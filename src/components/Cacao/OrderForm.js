import React, { useState, useEffect } from 'react';
import { OrderFormStyle, Label, Input, SubmitButton, PriceInput, InfoText, RadioButtonLabel, RadioButton, ArrowButton, QuantityInputWrapper, TextArea } from './styles';

const OrderForm = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState(''); // New state for last name
  const [address, setAddress] = useState('');
  const [extraInstructions, setExtraInstructions] = useState(''); // New state for extra instructions
  const [quantity, setQuantity] = useState(3);
  const [price, setPrice] = useState(0);
  const [shipping, setShipping] = useState('inPerson');

  useEffect(() => {
    const initialPrice = calculatePrice(quantity);
    setPrice(initialPrice);
  }, [quantity]);

  const calculatePrice = (quantity) => {
    const pricePerBar = 5;
    const discountPerThreeBars = 3;
    const numberOfDiscounts = Math.floor(quantity / 3);
    return (quantity * pricePerBar) - (numberOfDiscounts * discountPerThreeBars);
  };

  const sendWhatsAppMessage = () => {
    const chosenName = name;
    const deliveryMethod = shipping === 'ship' ? `Ship to my address: ${address}` : "Give me my chocolate in person";
    const message = `I would like some chocolate. Here is the info you need:\n\n` +
                    `Quantity: ${quantity}\n` +
                    `Price: ${price} euros\n` +
                    `Name: ${chosenName}\n` +
                    `${deliveryMethod}`;

    const whatsappUrl = `https://wa.me/+4915781295360?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendWhatsAppMessage();
    // Reset form fields or handle submission state as needed
  };

  return (
    <OrderFormStyle onSubmit={handleSubmit}>
      <Label>
        Quantity:
        <QuantityInputWrapper>
          <ArrowButton type="button" onClick={() => setQuantity(prev => Math.max(1, prev - 1))}>-</ArrowButton>
          <Input
            type="text" // Change to text to avoid default number input styles
            value={quantity}
            readOnly // Makes the input field read-only since the buttons are used for changing the value
            style={{ width: '50px', textAlign: 'center' }} // Inline styles for demonstration; consider moving to styled-components
          />
          <ArrowButton type="button" onClick={() => setQuantity(prev => prev + 1)}>+</ArrowButton>
        </QuantityInputWrapper>
      </Label>
      <Label>
  Price:
  <PriceInput
    type="number"
    value={price}
    placeholder="Euros"
    onChange={(e) => setPrice(Number(e.target.value))}
    required
  />
  <InfoText>
    If you think the price is too high or too low, adjust it according to your
    budget, and we'll go from there.
  </InfoText>
</Label>
      <Label>
        Delivery Option:
        <RadioButtonLabel>
          <RadioButton
            type="radio"
            name="shipping"
            value="ship"
            checked={shipping === 'ship'}
            onChange={() => setShipping('ship')}
          />
          Ship to my address
        </RadioButtonLabel>
        <RadioButtonLabel>
          <RadioButton
            type="radio"
            name="shipping"
            value="inPerson"
            checked={shipping === 'inPerson'}
            onChange={() => setShipping('inPerson')}
          />
          Give me my chocolate in person
        </RadioButtonLabel>
      </Label>
      
      {shipping === 'ship' && (
        <>
          <Label>
            Name:
            <Input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="First Name" />
          </Label>
          <Label>
            Last Name:
            <Input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required placeholder="Last Name" />
          </Label>
          <Label>
            Address: 
            <Input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required placeholder="Your shipping address" />
          </Label>
          <Label>
            Extra Instructions:
            <TextArea value={extraInstructions} onChange={(e) => setExtraInstructions(e.target.value)} placeholder="Any additional delivery instructions?" />
          </Label>
        </>
      )}
      <SubmitButton type="submit">Submit Order</SubmitButton>
      <InfoText>Clicking on 'Submit Order' will open WhatsApp and preformat a message that you can send me with your order details.</InfoText>

    </OrderFormStyle>
  );
};

export default OrderForm;
