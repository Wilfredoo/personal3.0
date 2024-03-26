import styled from 'styled-components';

// Use a warm, creamy color for the background, reminiscent of white chocolate.
const cream = '#f5f5f5';
const darkChocolate = '#3e2723'; // A rich brown color like dark chocolate.
const milkChocolate = '#795548'; // A lighter brown, akin to milk chocolate.
const cacaoPowder = '#5d4037'; // This is a medium brown, similar to cacao powder.
const chocolateAccent = '#d7ccc8'; // A light chocolate accent for hover states.

// Existing Styled components
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

export const LanguageButton = styled.button`
  margin-top: 20px;
  padding: 10px 15px;
  background-color: ${milkChocolate};
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${darkChocolate}; // Darker color on hover for the language button.
  }
`;

// ... Rest of your styled components remain unchanged


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
