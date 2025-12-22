import React from "react";
import styled from "styled-components";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function Button({ title, onClick }) {
  return (
    <StyledWrapper>
      <button type="submit" onClick={onClick} className= "bg-purple w-full">
        {title}
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    padding: 10px 24px;
    border-radius: 30px;
    cursor: pointer;
    border: 0;
    color: #fff;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 13px;
    transition: all 0.35s ease;
  }

  button:hover {
    letter-spacing: 2px;
    box-shadow: rgba(79, 70, 229, 0.45) 0px 10px 30px
    transform: translateY(-2px);
  }

  button:active {
    letter-spacing: 1.5px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 10px;
    transform: translateY(2px);
    transition: 120ms;
  }
`;


function ActionButtons({ viewLink, editLink, onDelete , className }) {
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
        <Link to={editLink} className={`${className} text-green-500 hover:text-green-700`}>
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

export { Button, ActionButtons };
