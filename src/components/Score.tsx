import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Wrapper } from "../App.styles";

const Scroe = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const score = Number(location.state);

  return (
    <Wrapper>
      <h1>Your score is: {score}!</h1>
      <button
        className="start"
        onClick={() => {
          navigate("/");
        }}
      >
        New Game
      </button>
    </Wrapper>
  );
};

export default Scroe;
