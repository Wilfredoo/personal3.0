import React from 'react';
import styled from 'styled-components';

const LetterWrapper = styled.div`

`;

const LetterContainer = styled.div`

`;
const ReferenceLetterButton = styled.button`

`;

const handleDownloadReferenceLetter = () => {
  const link = document.createElement('a');
  link.href = '/path/to/Reference_Letter_Endava.pdf';
  link.download = 'Reference_Letter_Endava.pdf';
  link.click();
};

const ReferenceLetter = () => {
  return (
    <LetterWrapper>
      <LetterContainer>
      <ReferenceLetterButton onClick={handleDownloadReferenceLetter}>
  See What My Former Employer Thinks (Spoiler: They're Happy!)
</ReferenceLetterButton>
      </LetterContainer>
    </LetterWrapper>
  );
};

export default ReferenceLetter;
