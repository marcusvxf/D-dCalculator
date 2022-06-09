/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable import/extensions */
import { stat } from "fs";
import { queryMonster, filterMonsterByName } from "../../service/querys/query";
import client from "../../service/api";
import { Monster } from "../context";
import { Players } from "../context2";

const searchMonster = (
  name: string,
  setCheck: (check: boolean) => void,
  setState: (state: Monster) => void
) => {
  client
    .request(queryMonster, filterMonsterByName(name))
    .then(data => {
      setState({
        name: data.monster.name,
        dif: data.monster.challenge_rating,
        life: data.monster.hit_points,
        qtdd: 1
      });
      setCheck(false);
    })
    .catch(error => console.log(error));
};

const getItemIndexByName = (name: string, state: Monster[]) => {
  let check = 0;
  let position = 0;
  state.forEach((element, index) => {
    if (element.name === name) {
      check = 1;
      position = index;
    }
  });
  return { check, position };
};

const addMonsterToContext = (
  name: string,
  state: Monster[],
  setState: (state: Monster[]) => void,
  qtd?: number
) => {
  const { check, position }: { check: number; position: number } =
    getItemIndexByName(name, state);
  if (check === 1) {
    state[position].qtdd += qtd || 1;
  } else if (check === 0) {
    client.request(queryMonster, filterMonsterByName(name)).then(data => {
      setState([
        ...state,
        {
          name: data.monster.name,
          dif: data.monster.challenge_rating,
          life: data.monster.hit_points,
          qtdd: qtd || 1
        }
      ]);
    });
  }
};

const addPlayerToContext = (
  player: Players,
  state: Players[],
  setState: (state: Players[]) => void
) => {
  if (state.find(element => element.level === player.level) === undefined) {
    setState([...state, player]);
    console.log(state);
  } else {
    const element = state.findIndex(element => element.level === player.level);
    state[element].qtdd += player.qtdd;
    setState([...state]);
    console.log(state);
  }
};

const readMonster = (state: Monster[]) => {
  console.log(state);
};

const removeMonsterFromContext = (
  nameM: string,
  state: Monster[],
  setState: (state: Monster[]) => void
) => {
  state.forEach((element, index) => {
    if (element.name === nameM) {
      state.splice(index, 1);
      setState([...state]);
    }
  });
};

export {
  searchMonster,
  addMonsterToContext,
  readMonster,
  removeMonsterFromContext,
  addPlayerToContext
};
