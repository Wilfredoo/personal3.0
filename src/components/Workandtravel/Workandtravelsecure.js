// WorkAndTravelSecure.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import WorkAndTravel from './Workandtravel';

const SecureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 2rem;
  font-family: sans-serif;
  background-color: #f5f5f5;
  color: #333;
`;

const LockImage = styled.img`
  width: 60px;
  margin-bottom: 1rem;
  opacity: 0.8;
`;


const LockText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 400px;
`;

const Form = styled.form`
  display: flex;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.7rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 150px;
`;

const Button = styled.button`
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

const WorkAndTravelSecure = () => {
  const [accessGranted, setAccessGranted] = useState(false);
  const [input, setInput] = useState('');
  const correctPin = '1001'; // Change your PIN here

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === correctPin) {
      setAccessGranted(true);
    } else {
      alert('Incorrect PIN.');
    }
  };

  if (accessGranted) return <WorkAndTravel />;

  return (
    <SecureContainer>
      <LockImage src={'/Icons/Lock.png'} alt="Lock Icon" />

      <LockText>This page is private. Please enter the password to continue.</LockText>
      <Form onSubmit={handleSubmit}>
        <Input
          type="password"
          placeholder="Enter PIN"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit">Enter</Button>
      </Form>
    </SecureContainer>
  );
};

export default WorkAndTravelSecure;
