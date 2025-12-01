import React from "react";
import styled from "styled-components";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Button = ({ title }) => {
  return (
    <StyledWrapper>
      <button type="submit">{title}</button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    padding: 10px 24px;
    border-radius: 30px;
    cursor: pointer;
    border: 0;
    background-color: #000; /* black button */
    color: #fff; /* white text */
    box-shadow: rgba(0, 0, 0, 0.15) 0 0 6px;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 13px;
    transition: all 0.4s ease;
  }

  button:hover {
    letter-spacing: 2px;
    background-color: #111; /* slightly lighter black */
    color: #fff;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 5px 18px; /* black hover shadow */
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

export function ActionButtons({ viewLink, editLink, onDelete }) {
  return (
    <div className="flex space-x-3 ">
      {viewLink && (
        <Link to={viewLink} className="text-blue-500 hover:text-blue-700">
          <button>
            <FaEye className="w-5 h-5" />
          </button>
        </Link>
      )}
      {editLink && (
        <Link to={editLink} className="text-green-500 hover:text-green-700">
          <button>
            <FaEdit className="w-5 h-5" />
          </button>
        </Link>
      )}
      {onDelete && (
        <button onClick={onDelete} className="text-red-500 hover:text-red-700">
          <FaTrash className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
