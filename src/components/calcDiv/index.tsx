/* eslint-disable import/extensions */
import React from "react";
import { Players, SecondContext } from "../../context/context2";
import { Monster, firstContext } from "../../context/context";

function CalcDiv() {
  const { state2, setState2 } = React.useContext(SecondContext);
  const { state, setState } = React.useContext(firstContext);
  return <>a</>;
}

export default CalcDiv;
