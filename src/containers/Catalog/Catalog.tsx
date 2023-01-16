import { ChangeEvent, FC } from "react";
import { Link } from "react-router-dom";
import Card from "components/Card";
import { AppRoutes } from "appConstants";
import { useAppDispatch, useAppSelector } from "hooks";
import {
  deleteHero,
  searchHeroes,
  selectFilteredHeroes,
  selectSearchValue,
} from "store/heroesSlice";
import styles from "./Catalog.module.css";
import Search from "components/Search";
import AddHeroCard from "containers/AddHeroCard";

const Catalog: FC = () => {
  const searchValue = useAppSelector(selectSearchValue);
  const filteredHeroes = useAppSelector(selectFilteredHeroes);
  const dispatch = useAppDispatch();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newSearchValue = e.target.value.trim().toLowerCase();
    dispatch(searchHeroes({ value: newSearchValue }));
  };

  const removeHero = (slug: string) => {
    dispatch(deleteHero({ slug }));
    dispatch(searchHeroes({ value: searchValue }));
  };

  return (
    <div className={styles.wrap}>
      <Search searchValue={searchValue} onInputChange={handleSearchChange} />
      <div className={styles.cards}>
        {filteredHeroes.map((hero) => (
          <Link to={`${AppRoutes.Heroes}/${hero.slug}`} key={hero.slug}>
            <Card hero={hero} removeHero={removeHero} />
          </Link>
        ))}
        <AddHeroCard searchValue={searchValue} />
      </div>
    </div>
  );
};

export default Catalog;
