import React, { useState, useEffect } from 'react';
import { OrderFormStyle, Label, Input, SubmitButton, PriceInput, InfoText, RadioButtonLabel, RadioButton, ArrowButton, QuantityInputWrapper, TextArea } from './styles';

const OrderForm = ({ language, translations }) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState(''); // New state for last name
  const [address, setAddress] = useState('');
  const [extraInstructions, setExtraInstructions] = useState(''); // New state for extra instructions
  const [quantity, setQuantity] = useState(3);
  const [price, setPrice] = useState(0);
  const [shipping, setShipping] = useState('ship');

  const formTranslations = translations.orderForm;

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
    let deliveryDetails = '';
  
    if (shipping === 'ship') {
      deliveryDetails = `Delivery Type: Shipping\n` +
                        `Address: ${address}\n` +
                        `Name: ${(name.trim() || lastName.trim()) ? `${name.trim()} ${lastName.trim()}` : 'N/A'}\n` +
                        `Extra Instructions: ${extraInstructions || 'None'}`;
    } else if (shipping === 'inPerson') {
      deliveryDetails = `Delivery Type: In-Person Pickup\n` +
                        `Extra Instructions: ${extraInstructions || 'None'}`;
    }
    
    const message = `Chocolate Order Request:\n` +
                    `--------------------------\n` +
                    `Quantity: ${quantity}\n` +
                    `Price: ${price} euros\n` +
                    `--------------------------\n` +
                    `${deliveryDetails}`;
  
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
              <Label>{formTranslations.quantityLabel}:</Label>

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
      <Label>{formTranslations.priceLabel}:</Label>

  <PriceInput
    type="number"
    value={price}
    placeholder="Euros"
    onChange={(e) => setPrice(Number(e.target.value))}
    required
  />
       <InfoText>{formTranslations.priceAdjustmentText}</InfoText>

</Label>
      <Label>
      <Label>{formTranslations.deliveryOptionLabel}:</Label>
        <RadioButtonLabel>
          <RadioButton
            type="radio"
            name="shipping"
            value="ship"
            checked={shipping === 'ship'}
            onChange={() => setShipping('ship')}
          />
          {formTranslations.shipToAddressOption}
        </RadioButtonLabel>
        <RadioButtonLabel>
          <RadioButton
            type="radio"
            name="shipping"
            value="inPerson"
            checked={shipping === 'inPerson'}
            onChange={() => setShipping('inPerson')}
          />
          {formTranslations.inPersonOption}
        </RadioButtonLabel>
      </Label>
      {shipping === 'ship' && (
        <>
          <Label>
            <Input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder={formTranslations.firstNamePlaceholder} />
          </Label>
          <Label>
            <Input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required placeholder={formTranslations.lastNamePlaceholder} />
          </Label>
          <Label>
            <Input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required placeholder={formTranslations.addressPlaceholder} />
          </Label>
          <Label>
            <TextArea value={extraInstructions} onChange={(e) => setExtraInstructions(e.target.value)} placeholder={formTranslations.extraInstructionsPlaceholder}/>
          </Label>
        </>
      )}
      <SubmitButton type="submit">{formTranslations.submitOrderButton}</SubmitButton>
      <InfoText>{formTranslations.submitOrderExplanation}</InfoText>
    </OrderFormStyle>
  );
};

export default OrderForm;
