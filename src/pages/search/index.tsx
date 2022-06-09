/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-shadow */
/* eslint-disable import/extensions */
import React from "react";
import { firstContext, Monster } from "../../context/context";
import {
  removeMonsterFromContext,
  searchMonster,
  readMonster
} from "../../context/actions/action";
import SerchCard from "../../components/searchCard";
import PlayerConfig from "../../components/playerConfig";

function Search() {
  const { state, setState } = React.useContext(firstContext);

  const [monster, setMonster] = React.useState<Monster>({
    name: "",
    dif: 1,
    life: 1,
    qtdd: 1
  });
  const [nameM, setNameM] = React.useState<string>("");
  const [check, setCheck] = React.useState<boolean>(true);
  return (
    <div>
      <input
        placeholder="Digite aqui"
        value={nameM}
        onChange={e => setNameM(e.target.value)}
      />
      <button
        type="button"
        onClick={() => searchMonster(nameM, setCheck, setMonster)}>
        Pesquisar monstro
      </button>
      <button type="button" onClick={() => readMonster(state)}>
        mostrar
      </button>
      <button
        type="button"
        onClick={() => removeMonsterFromContext(nameM, state, setState)}>
        deletar
      </button>
      <PlayerConfig />
      {check === true ? (
        <div />
      ) : (
        <SerchCard dado={monster} setCheck={setCheck} />
      )}
      {state.length > 0 ? (
        <div>
          {state.map(element => {
            return (
              <div key={element.name}>
                <p>Vida:{element.name}</p>
                <p>Vida:{element.life}</p>
                <p>Dificuldade:{element.dif}</p>
                <p>Quantidade:{element.qtdd}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}

export default Search;
