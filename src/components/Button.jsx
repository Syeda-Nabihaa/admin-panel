import React from 'react';
import styled from 'styled-components';

const Button = ({title}) => {
  return (
    <StyledWrapper>
      <button type='submit'>{title}</button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
 button {
  padding: 10px 24px;
  border-radius: 30px;
  cursor: pointer;
  border: 0;
  background-color: #000;          /* black button */
  color: #fff;                     /* white text */
  box-shadow: rgba(0, 0, 0, 0.15) 0 0 6px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 13px;
  transition: all 0.4s ease;
}

button:hover {
  letter-spacing: 2px;
  background-color: #111;          /* slightly lighter black */
  color: #fff;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 5px 18px;  /* black hover shadow */
}

button:active {
  letter-spacing: 2px;
  background-color: #111;
  color: #fff;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 0px;
  transform: translateY(6px);
  transition: 100ms;
}

`;

export default Button;
