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
            stateM || { name: "da", dif: 4, life: 4, qtdd: 4 }
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
            stateM || { name: "da", dif: 4, life: 4, qtdd: 4 }
          )
        }>
        +
      </button>
    </div>
  );
}

export default AddOrRemove;
