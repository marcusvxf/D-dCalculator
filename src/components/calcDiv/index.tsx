/* eslint-disable import/extensions */
import React from "react";
import { Difficulty } from "./interface";
import { Players, SecondContext } from "../../context/context2";
import { Monster, firstContext } from "../../context/context";
import Mult from "./Mult";

function calcDifficultyToPlayers(arr: Difficulty[], state: Players[]) {
  let easy = 0;
  let medium = 0;
  let hard = 0;
  let deadly = 0;

  state.forEach(element => {
    easy += arr[element.level].easy;
    medium += arr[element.level].medium;
    hard += arr[element.level].hard;
    deadly += arr[element.level].deadly;
  });

  return { easy, medium, hard, deadly };
}

function calcDifficultyMonster(state: Monster[]) {
  let xp = 0;
  const mult = state.length;
  state.forEach(element => {
    xp += element.exp;
  });
  switch (mult) {
    case 1:
      return xp * Mult.Lv1;
    case 2:
      return xp * Mult.Lv2;
    case 3:
      return xp * Mult.Lv3To6;
    case 4:
      return xp * Mult.Lv3To6;
    case 5:
      return xp * Mult.Lv3To6;
    case 6:
      return xp * Mult.Lv3To6;
    case 7:
      return xp * Mult.Lv7To10;
    case 8:
      return xp * Mult.Lv7To10;
    case 9:
      return xp * Mult.Lv7To10;
    case 10:
      return xp * Mult.Lv7To10;
    case 11:
      return xp * Mult.Lv11To14;
    case 12:
      return xp * Mult.Lv11To14;
    case 13:
      return xp * Mult.Lv11To14;
    case 14:
      return xp * Mult.Lv11To14;
    default:
      return xp * Mult.Lv15ToUpper;
  }
}

function calcDifficulty(dif: Difficulty, xpMonster: number) {
  if (xpMonster < dif.easy) {
    return "easy";
  }
  if (xpMonster < dif.medium) {
    return "medium";
  }
  if (xpMonster < dif.hard) {
    return "hard";
  }
  if (xpMonster < dif.deadly) {
    return "deadly";
  }
  return "";
}
function CalcDiv() {
  const arr: Difficulty[] = [
    { easy: 25, medium: 50, hard: 75, deadly: 100 },
    { easy: 50, medium: 100, hard: 150, deadly: 200 },
    { easy: 75, medium: 150, hard: 225, deadly: 400 },
    { easy: 125, medium: 250, hard: 375, deadly: 500 },
    { easy: 250, medium: 500, hard: 750, deadly: 1100 }
  ];
  const { state2, setState2 } = React.useContext(SecondContext);
  const { state, setState } = React.useContext(firstContext);

  return <button type="button">Aqui</button>;
}

export default CalcDiv;
