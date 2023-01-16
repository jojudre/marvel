import { FC } from "react";
import { Hero } from "types";
import Tag from "components/Tag";
import styles from "./Card.module.css";
import { Urn } from "assets/icons";

interface ICard {
  hero: Hero;
  removeHero: (slug: string) => void;
}

const Card: FC<ICard> = ({ hero, removeHero }) => {
  const handleRemoveHero = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    removeHero(hero.slug);
  };

  return (
    <div className={styles.wrap}>
      <button className={styles.removeButton} onClick={handleRemoveHero}>
        <Urn />
      </button>
      <img src={hero.img} alt={hero.name} className={styles.image} />
      <div className={styles.info}>
        <h2 className={styles.title}>{hero.name}</h2>
        <div className={styles.tags}>
          {hero.tags.map((tag) => (
            <Tag title={tag} key={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
