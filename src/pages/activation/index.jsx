import React from "react";
import "./_activation.scss";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { activation } from "../../store/actions/userAction";

const Activation = () => {
  const dispatch = useDispatch();

  const { token } = useParams();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(activation(token));
  };

  return (
    <div>
      <h1>{token}</h1>
      <button onClick={onSubmit}>Activation</button>
    </div>
  );
};

export default Activation;
