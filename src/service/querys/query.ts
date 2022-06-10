import { gql } from "graphql-request";

const firstLetterUppercase = (arr: string) =>
  arr.charAt(0).toUpperCase() + arr.slice(1);

export const queryMonster = gql`
  query Query($filter: FilterFindOneMonsterInput) {
    monster(filter: $filter) {
      name
      armor_class
      challenge_rating
      xp
      charisma
      constitution
      hit_points
      dexterity
      intelligence
      strength
      wisdom
      speed {
        walk
        fly
      }
    }
  }
`;

export const filterMonsterByName = (name: string) => ({
  filter: {
    name: firstLetterUppercase(name)
  }
});
