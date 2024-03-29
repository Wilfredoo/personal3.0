import styled from 'styled-components';
const cream = '#f5f5f5';
const darkChocolate = '#3e2723'; // A rich brown color like dark chocolate.
const milkChocolate = '#795548'; // A lighter brown, akin to milk chocolate.
const cacaoPowder = '#5d4037'; // This is a medium brown, similar to cacao powder.
const chocolateAccent = '#d7ccc8'; // A light chocolate accent for hover states.

export const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: ${cream}; // A light creamy background for the container.
`;

export const Title = styled.h1`
  color: ${darkChocolate};
`;

export const Section = styled.section`
  margin: 20px 0;
`;

export const SectionTitle = styled.h2`
  color: ${milkChocolate};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled.p`
  color: ${cacaoPowder};
  line-height: 1.6;
`;

export const VideoWrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%; /* Aspect ratio 16:9 */
  height: 0;
`;

export const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;

export const ToggleSymbol = styled.span`
  font-size: 20px;
  color: ${milkChocolate}; // Consistent with the SectionTitle color.
`;

export const OrderFormStyle = styled.form`
  background: ${cream};
  padding: 10px 20px 20px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.label`
  display: block;
  margin: 10px 0;
  color: ${cacaoPowder};
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center; // Align items vertically in the center
  gap: 5px; // Adds a little space between the input and the euro symbol
`;

export const Input = styled.input`
  padding: 8px;
  margin-top: 5px;
  border: 1px solid ${chocolateAccent};
  border-radius: 4px;
  width: calc(100% - 16px);
  display: block;
`;

export const SubmitButton = styled.button`
  padding: 10px 15px;
  background-color: ${darkChocolate};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: block;
  margin-top: 20px;
  width: 100%;

  &:hover {
    background-color: ${milkChocolate}; // A lighter chocolate color for the button hover state.
  }
`;

export const TryChocolateButton = styled.button`
  margin-left: 1rem;
  padding: 10px 15px;
  cursor: pointer;
  background-color: ${darkChocolate};

  color: white; // White text to stand out against a darker background
  border: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); // Optional: shadow for depth
  transition: background-color 0.3s; // Smooth transition for hover effect

  &:hover {
    background-color: ${darkChocolate}; // Consistent with LanguageButton hover
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px; // To match the LanguageButton's margin-top
`;

export const LanguageButton = styled.button`
background-color: ${chocolateAccent}; // Use a distinctive color to stand out

  padding: 10px 15px;
  background-color: ${milkChocolate};
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s; // Smooth transition for hover effect
`;

export const PriceInput = styled(Input)`
  width: 100px; // Adjusted width for the price input
  text-align: center;
`;

export const TextArea = styled.textarea`
  width: 100%; // Full width of the form container
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 5px;
  font-family: Arial, sans-serif; // Match the font of other inputs
`;

export const InfoText = styled.p`
  color: #5D4037;
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 0.8rem;
`;

export const SmallInfoText = styled.p`
  color: #5D4037;
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 0.8rem;
`;

export const Footer = styled.footer`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #ccc; // Adds a subtle line to separate the footer from the form content
  font-size: 0.8rem;
  text-align: center;
  color: #5D4037;
`;

export const RadioButtonLabel = styled.label`
  display: block;
  margin: 5px 0;
  font-size: 0.9rem;
  color: #6D4C41;
`;

export const RadioButton = styled.input`
  margin-right: 10px;
`;

export const ArrowButton = styled.button`
  background-color: #f0f0f0; // Light gray background
  border: 1px solid #ccc; // Border to match the input field
  cursor: pointer;
  font-size: 1.5rem; // Larger font size for visibility
  padding: 5px 10px; // Padding for spacing around the arrow
  margin: 0 5px; // Margin to separate from the input field
  &:hover {
    background-color: #e0e0e0; // Slightly darker on hover for feedback
  }
  &:focus {
    outline: none; // Removes the default focus outline
  }
`;

export const QuantityInputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

// batch orders

export const OrderList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const OrderItem = styled.li`
  background-color: ${cream};
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
  color: ${cacaoPowder};
`;

export const OrderDetail = styled.div`
  margin-bottom: 5px;
`;

export const OrderHeader = styled.h4`
  margin: 0;
  color: ${milkChocolate};
  font-weight: 600; /* 'semibold' typically corresponds to 600 in font-weight */
`;

export const EmphasizedText = styled.strong`
  font-weight: bold;
`;


export const EmphasizedTextHeader = styled.strong`
  font-size: 1.2rem; // Smaller font size for button text
`;


export const OrderText = styled.p`
  margin: 5px 0;
  color: ${cacaoPowder};
`;

export const HighlightContainer = styled.div`
  margin-top: 20px;
  background-color: ${chocolateAccent};
  padding: 5px 15px 5px 15px;
  border-radius: 5px;
  color: ${darkChocolate};
`;

// In your styles.js



export const PaymentInfo = styled.section`
  margin-top: 20px;
  padding: 15px;
  background-color: ${cream};
  border: 1px solid ${chocolateAccent};
  border-radius: 5px;
`;

export const CopyButton = styled.button`
  background-color: ${milkChocolate};
  color: white;
  border: none;
  cursor: pointer;
  padding: 8px 12px; // Reduced padding for a more compact button
  display: inline-flex; // Changed to inline-flex to avoid taking full width
  align-items: center;
  border-radius: 4px;
  transition: background-color 0.3s;
  font-size: 0.8rem; // Smaller font size for button text
  gap: 5px; // Spacing between the icon and the text
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); // Subtle shadow for depth

  &:hover {
    background-color: ${darkChocolate};
  }

  img {
    width: 16px; // Restrict the size of the icon
    height: 16px; // Restrict the size of the icon
  }

  &.clicked {
    background-color: #ffc107; // Change to a color of your choice
    transition: background-color 0.3s ease; // Smooth transition
  }
`;


// Styled Components for the PaymentInfo

export const PaymentMethodList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0; // Remove margin-top for direct integration into the PaymentInfo box
`;

export const PaymentMethodItem = styled.li`
  background-color: ${cream};
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  display: grid;
  grid-template-columns: auto 1fr auto; // Use grid to align items
  align-items: center;
  gap: 10px;
  border: 1px solid ${chocolateAccent}; // subtle border instead of left border

  &:last-child {
    margin-bottom: 0;
  }
`;

export const PaymentIcon = styled.span`
  font-size: 1.5rem; // Increase size for better visual impact
`;

export const PaymentDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 0.9rem; // Slightly larger font for readability
  color: ${darkChocolate}; // Use darkChocolate for text to match the Title
`;

export const CopyTextButton = styled.button`
  background-color: ${milkChocolate};
  color: white;
  border: none;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: background-color 0.3s;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: min-content;

  &:hover {
    background-color: ${darkChocolate};
  }

  img {
    width: 12px; // Reduced size for the copy icon
    height: 12px;
    margin-right: 5px; // Added margin for spacing between icon and text
  }
`;

// Use this styled component for individual account details
export const AccountDetail = styled.div`
  color: ${cacaoPowder};
  margin-bottom: 5px;

  &:last-child {
    margin-bottom: 0;
  }
`;