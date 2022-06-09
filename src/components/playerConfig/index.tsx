/* eslint-disable import/no-duplicates */
/* eslint-disable import/extensions */
import React from "react";
import { SecondContext } from "../../context/context2";
import AddOrRemovePlayer from "../addOrRemovePlayer";
import { addPlayerToContext } from "../../context/actions/action";
import { Players } from "../../context/context2";

function PlayerConfig() {
  const addQtdd = (
    state: Players,
    setState: (stateN: Players) => void,
    qtd: number
  ) => {
    setState({ ...state, qtdd: state.qtdd + qtd });
  };
  const addLvl = (
    state: Players,
    setState: (stateN: Players) => void,
    qtd: number
  ) => {
    setState({ ...state, level: state.level + qtd });
  };
  const { state2, setState2 } = React.useContext(SecondContext);
  const [player, setPlayer] = React.useState<Players>({ level: 1, qtdd: 1 });

  return (
    <div>
      <AddOrRemovePlayer
        lvl={addLvl}
        add={addQtdd}
        setQtd={setPlayer}
        player={player}
      />
      <button
        type="button"
        onClick={() => addPlayerToContext(player, state2, setState2)}>
        Add Jogador
      </button>
    </div>
  );
}

export default PlayerConfig;
