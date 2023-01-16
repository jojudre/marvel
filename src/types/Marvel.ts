export interface Hero {
  slug: string,
  name: string,
  description: string,
  img: string,
  tags: string[],
}

export interface HeroesState {
  heroes: Hero[],
  filteredHeroes: Hero[],
  errorMessage: string,
  searchValue: string,
}
