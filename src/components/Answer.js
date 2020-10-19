import React from 'react';
import styled from 'styled-components';

export default function Answer({ isSelected, onClick, children }) {
  return (
    <Label isSelected={isSelected} onClick={onClick}>
      {children}
    </Label>
  );
}

const Label = styled.div`
  padding: 14px 21px;
  margin-bottom: 12px;
  border-radius: 6px;
  box-shadow: 0 4px 8px 0 rgba(69, 111, 128, 0.08);

  ${({ isSelected }) =>
    isSelected
      ? 'background-color: #3acce1; border: solid 3px #3acce1;  color: #ffffff;'
      : 'background-color:rgba(255, 255, 255, 0.72); border: solid 1px #ffffff; color: #38474b;'};

  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  font-size: 16px;
  @media screen and (max-width: 320px) {
    font-size: 14px;
  }

  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
`;
