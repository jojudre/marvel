import { SearchIcon } from "assets/icons";
import { ChangeEvent, FC } from "react";
import styles from "./Search.module.css";

interface ISearch {
  placeholder?: string;
  searchValue?: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: FC<ISearch> = ({
  placeholder = "Search by name or tag",
  searchValue,
  onInputChange,
}) => (
  <div className={styles.wrap}>
    <span className={styles.icon}>
      <SearchIcon />
    </span>
    <input
      value={searchValue}
      onChange={onInputChange}
      type='text'
      placeholder={placeholder}
      className={styles.input}
    />
  </div>
);

export default Search;
