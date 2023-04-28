import React, {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  KeyboardEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import styles from "./Rating.module.css";
import StarIcon from "./Vector.svg";

interface RatingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number) => void;
}

const Rating: FC<RatingProps> = ({
  isEditable = false,
  setRating,
  rating,
  ...props
}) => {
  const [ratingArr, setRatingArr] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const changeDisplay = (stars: number) => {
    if (!isEditable) {
      return;
    }

    constructRating(stars);
  };

  const handleClick = (index: number) => {
    if (!isEditable || !setRating) return;

    setRating(index);
  };

  const handleSpace = (e: KeyboardEvent<SVGElement>, index: number) => {
    if (e.code != "Space" || !setRating) return;

    setRating(index);
  };

  const constructRating = (currentRating: number) => {
    const updatedArr = ratingArr.map((el: JSX.Element, i) => (
      <span
        key={i}
        className={`${styles.star} ${i < currentRating && styles.filled} ${
          isEditable && styles.editable
        }`}
        onMouseEnter={() => changeDisplay(i + 1)}
        onMouseLeave={() => changeDisplay(rating)}
        onClick={() => handleClick(i + 1)}
      >
        <StarIcon
          tabIndex={isEditable ? 0 : -1}
          onKeyDown={(e: KeyboardEvent<SVGElement>) =>
            isEditable && handleSpace(e, i + 1)
          }
        />
      </span>
    ));

    setRatingArr(updatedArr);
  };

  return (
    <div {...props}>
      {ratingArr.map((el, i) => (
        <span key={i}>{el}</span>
      ))}
    </div>
  );
};

export default Rating;
