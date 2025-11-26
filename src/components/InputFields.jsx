import React from 'react';
import styled from 'styled-components';

const Input = ({placeholder , onChange , type, name}) => {
  return (
    <StyledWrapper>
      <input className="input" placeholder={placeholder} onChange={onChange} type={type} name={name}/>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .input {
    border: 2px solid transparent;
    width: 100%;
    height: 2.5em;
    padding-left: 0.8em;
    outline: none;
    overflow: hidden;
    background-color: #F3F3F3;
    border-radius: 10px;
    transition: all 0.5s;
  }

  .input:hover,
  .input:focus {
    border: 2px solid #4A9DEC;
    box-shadow: 0px 0px 0px 7px rgb(74, 157, 236, 20%);
    background-color: white;
  }`;

export default Input;
