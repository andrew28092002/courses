import React, {
  DetailedHTMLProps,
  HTMLAttributes,
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

const Rating = ({
  isEditable = false,
  setRating,
  rating,
  ...props
}: RatingProps) => {
  const [ratingArr, setRatingArr] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  const changeDisplay = (stars: number) => {
    if (!isEditable) {
      return;
    }

    constructRating(stars);
  };

  const constructRating = (currentRating: number) => {
    const updatedArr = ratingArr.map((el: JSX.Element, i) => (
      <StarIcon key={i}
        className={`${styles.star} ${i < currentRating && styles.filled}`}
        onMouseEnter={() => changeDisplay(i + 1)}
        onMouseLeave={() => changeDisplay(rating)}
      />
    ));

    setRatingArr(updatedArr);
  };

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  return (
    <div {...props}>
      {ratingArr.map((el, i) => (
        <span key={i}>{el}</span>
      ))}
    </div>
  );
};

export default Rating;
