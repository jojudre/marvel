import { Close } from "assets/icons";
import { FC } from "react";
import styles from "./Tag.module.css";

interface ITag {
  title: string;
  onRemove?: (tag: string) => void;
}

const Tag: FC<ITag> = ({ title, onRemove }) => {
  const handleRemove = (e: React.MouseEvent<HTMLElement>) => {
    if (onRemove) onRemove(title);
  };

  return (
    <div className={styles.wrap}>
      <h3 className={styles.title}>{title}</h3>
      {onRemove && (
        <button
          onClick={handleRemove}
          className={styles.removeButton}
          type='button'
        >
          <Close className={styles.removeIcon} />
        </button>
      )}
    </div>
  );
};

export default Tag;
