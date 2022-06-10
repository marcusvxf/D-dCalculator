/* eslint-disable react/require-default-props */
/* eslint-disable import/extensions */
import React from "react";
import { Monster } from "../../context/context";

interface props {
  add: (
    state: number,
    setState: (stateN: number) => void,
    qtd: number,
    stateM: Monster
  ) => void;
  qtd?: number;
  setQtd: (state: number) => void;
  stateM?: Monster;
}

function AddOrRemove({ add, qtd, setQtd, stateM }: props) {
  return (
    <div>
      <button
        type="button"
        onClick={() =>
          add(
            qtd || 1,
            setQtd,
            -1,
            stateM || { name: "", dif: 0, life: 0, qtdd: 0, exp: 0 }
          )
        }>
        -
      </button>
      {qtd}
      <button
        type="button"
        onClick={() =>
          add(
            qtd || 1,
            setQtd,
            1,
            stateM || { name: "", dif: 0, life: 0, qtdd: 0, exp: 0 }
          )
        }>
        +
      </button>
    </div>
  );
}

export default AddOrRemove;
