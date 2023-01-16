import { Plus } from "assets/icons";
import Tag from "components/Tag";
import { useAppSelector } from "hooks";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addHero, searchHeroes, selectError } from "store/heroesSlice";
import { Hero } from "types";
import styles from "./AddHeroCard.module.css";

interface IAddHeroCard {
  searchValue: string;
}

const heroInitialState = {
  slug: "",
  name: "",
  description: "",
  img: "",
  tags: [],
};

const AddHeroCard: FC<IAddHeroCard> = ({ searchValue }) => {
  const dispatch = useDispatch();
  const [tagValue, setTagValue] = useState("");
  const error = useAppSelector(selectError);

  const [newHero, setNewHero] = useState<Hero>(heroInitialState);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setNewHero({ ...newHero, [name]: value });
  };

  const addTag = () => {
    if (
      tagValue &&
      !newHero.tags.find((tag) => tag.toLowerCase() === tagValue.toLowerCase())
    ) {
      setNewHero({ ...newHero, tags: [...newHero.tags, tagValue] });
      setTagValue("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setNewHero({
      ...newHero,
      tags: newHero.tags.filter((tag) => tag !== tagToRemove),
    });
  };

  const handleTagsInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTagValue(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addHero(newHero));
    dispatch(searchHeroes({ value: searchValue }));
    setNewHero(heroInitialState);
  };

  return (
    <div className={styles.wrap}>
      <span className={styles.title}>Add Hero</span>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            value={newHero.name}
            onChange={handleInputChange}
            name='name'
            required
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor='img'>Image (put url here)</label>
          <input
            type='textarea'
            value={newHero.img}
            onChange={handleInputChange}
            name='img'
            required
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor='description'>Description</label>
          <textarea
            value={newHero.description}
            onChange={handleInputChange}
            name='description'
            required
            className={styles.textarea}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor='tags'>Tags</label>
          <div className={styles.tagInput}>
            <input
              type='text'
              value={tagValue}
              name='tags'
              onChange={handleTagsInputChange}
              className={styles.input}
            />
            <button onClick={addTag} type='button' className={styles.addTag}>
              <Plus />
            </button>
          </div>

          <div className={styles.tags}>
            {newHero.tags.map((tag) => (
              <Tag title={tag} key={tag} onRemove={removeTag} />
            ))}
          </div>
        </div>

        <button type='submit' className={styles.submitButton}>
          Submit
        </button>
      </form>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default AddHeroCard;
