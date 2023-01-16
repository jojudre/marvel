import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { heroes } from "appConstants";
import { RootState } from ".";
import { Hero, HeroesState } from "types";
import { getSlug } from "utils";

const initialState: HeroesState = {
  heroes,
  filteredHeroes: heroes,
  errorMessage: "",
  searchValue: "",
};

export const heroesSlice = createSlice({
  name: "heroes",
  initialState,
  reducers: {
    addHero: (state, action: PayloadAction<Hero>) => {
      const newSlug = getSlug(action.payload.name);
      if (state.heroes.find((hero) => hero.slug === newSlug)) {
        state.errorMessage = "Sorry this hero already exist";
      } else {
        const newHero = {
          ...action.payload,
          slug: getSlug(action.payload.name),
        };
        state.heroes.push(newHero);
        state.errorMessage = "";
      }
    },
    searchHeroes: (state, action: PayloadAction<{ value: string }>) => {
      const searchValue = action.payload.value;
      state.searchValue = searchValue;
      state.filteredHeroes = state.heroes.filter(
        (hero) =>
          hero.name.toLowerCase().includes(searchValue) ||
          hero.tags.find((tag) => tag.toLowerCase().includes(searchValue))
      );
    },
    deleteHero: (state, action: PayloadAction<{ slug: string }>) => {
      state.heroes = state.heroes.filter(
        (hero) => hero.slug !== action.payload.slug
      );
    },
  },
});

export const { addHero, searchHeroes, deleteHero } = heroesSlice.actions;

export const selectHeroes = (state: RootState) => state.heroes.heroes;
export const selectError = (state: RootState) => state.heroes.errorMessage;
export const selectSearchValue = (state: RootState) => state.heroes.searchValue;

export const selectFilteredHeroes = (state: RootState) =>
  state.heroes.filteredHeroes;

export default heroesSlice.reducer;
