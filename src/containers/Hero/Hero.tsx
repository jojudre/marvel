import { FC } from "react";
import { useParams } from "react-router-dom";
import Tag from "components/Tag";
import { useAppSelector } from "hooks";
import { selectHeroes } from "store/heroesSlice";
import styles from "./Hero.module.css";

const Hero: FC = () => {
  const { slug } = useParams();
  const heroes = useAppSelector(selectHeroes);
  const hero = heroes.find((heroItem) => heroItem.slug === slug);

  return (
    <div className={styles.wrap}>
      {hero ? (
        <>
          <img src={hero.img} alt={hero.name} className={styles.image} />
          <div className={styles.info}>
            <h2 className={styles.title}>{hero.name}</h2>
            <h3>{hero.description}</h3>
            <div className={styles.tags}>
              {hero.tags.map((tag) => (
                <Tag title={tag} key={tag} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div>No such hero</div>
      )}
    </div>
  );
};

export default Hero;
