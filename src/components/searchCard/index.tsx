/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable import/extensions */
import React from "react";
import { addMonsterToContext } from "../../context/actions/action";
import { Monster, firstContext } from "../../context/context";
import { Card, Back } from "./styled";
import AddOrRemove from "../addOrRemove";

interface props {
  dado: Monster;
  setCheck: (state: boolean) => void;
}

const add = (state: number, setState: (state: number) => void, qtd: number) => {
  if (state + qtd <= 0) {
    setState(1);
  } else {
    setState(state + qtd);
  }
};

function SerchCard({ dado, setCheck }: props) {
  const { state, setState } = React.useContext(firstContext);
  const [qtd, setQtd] = React.useState<number>(dado.qtdd);

  return (
    <Back>
      <Card>
        <div>{dado.name}</div>
        <div>{dado.life}</div>
        <div>{dado.dif}</div>
        <AddOrRemove add={add} qtd={qtd} setQtd={setQtd} />
        <button
          type="button"
          onClick={() => addMonsterToContext(dado.name, state, setState, qtd)}>
          Add monster
        </button>
        <button type="button" onClick={() => setCheck(true)}>
          Close
        </button>
      </Card>
    </Back>
  );
}

export default SerchCard;
