/* eslint-disable react/require-default-props */
/* eslint-disable import/extensions */
import React from "react";
import { Players } from "../../context/context2";

interface props {
  add: (
    state: Players,
    setState: (stateN: Players) => void,
    qtd: number
  ) => void;
  lvl: (
    state: Players,
    setState: (stateN: Players) => void,
    qtd: number
  ) => void;
  player: Players;
  setQtd: (state: Players) => void;
}

function AddOrRemovePlayer({ lvl, add, player, setQtd }: props) {
  return (
    <div>
      <button type="button" onClick={() => add(player, setQtd, -1)}>
        -
      </button>
      Quantidade:{player.qtdd}
      <button type="button" onClick={() => add(player, setQtd, 1)}>
        +
      </button>
      <button type="button" onClick={() => lvl(player, setQtd, -1)}>
        -
      </button>
      Level:{player.level}
      <button type="button" onClick={() => lvl(player, setQtd, 1)}>
        +
      </button>
    </div>
  );
}

export default AddOrRemovePlayer;
