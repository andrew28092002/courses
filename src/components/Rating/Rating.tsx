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

  const constructRating = useCallback(
    (currentRating: number) => {
      const updatedArr = ratingArr.map((el: JSX.Element, i) => (
        <StarIcon
          className={`${styles.star} ${i < currentRating && styles.filled}`}
        />
      ));

      setRatingArr(updatedArr);
      console.log("RENDER CONSTRUCT FUNCTION");
    },
    [rating]
  );

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
