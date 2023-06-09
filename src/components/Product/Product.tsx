import React, {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  useRef,
  useState,
} from "react";
import styles from "./Product.module.css";
import { ProductModel } from "@/interfaces/product.inteface";
import Card from "../Card/Card";
import Rating from "../Rating/Rating";
import Tag from "../Tag/Tag";
import Button from "../Button/Button";
import { priceRu } from "../hhData/HhData";
import Divider from "../Divider/Divider";
import Review from "../Review/Review";
import ReviewForm from "../ReviewForm/ReviewForm";

interface ProductProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: ProductModel;
}

export const declOfNumber = (
  num: number,
  titles: [string, string, string]
): string => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    num % 100 > 4 && num % 100 < 20 ? 2 : cases[num % 10 < 5 ? num % 10 : 5]
  ];
};

const Product: FC<ProductProps> = ({ product, className, ...props }) => {
  const [isReviewOpen, setIsReviewOpen] = useState<boolean>(false);
  const reviewRef = useRef<HTMLDivElement>(null);

  const scrollToReview = () => {
    setIsReviewOpen(true);

    reviewRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Card className={styles.product}>
        <div className={styles.logo}>
          <img
            src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
            alt={product.title}
          />
        </div>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.price}>
          {priceRu(product.price)}
          {product.oldPrice && (
            <Tag className={styles.oldPrice} color="green">
              {priceRu(product.price - product.oldPrice)}
            </Tag>
          )}
        </div>
        <div className={styles.credit}>
          {priceRu(product.credit)}
          <span className={styles.month}>/мес</span>
        </div>
        <div className={styles.rating}>
          <Rating rating={product.reviewAvg ?? 0} />
        </div>
        <div className={styles.tags}>
          {product.categories.map((category) => (
            <Tag className={styles.category} key={category} color="ghost">
              {category}
            </Tag>
          ))}
        </div>
        <div className={styles.priceTitle}>цена</div>
        <div className={styles.creditTitle}>кредит</div>

        <div className={styles.rateTitle}>
          <a href="#ref" onClick={scrollToReview}>
            {product.reviewCount}{" "}
            {declOfNumber(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}
          </a>
        </div>
        <Divider className={styles.hr1} />

        <div className={styles.description}>{product.description}</div>
        <div className={styles.feature}>
          {product.characteristics.map((char) => (
            <div className={styles.characteristics} key={char.name}>
              <span className={styles.characteristicsName}>{char.name}</span>
              <span className={styles.characteristicsDots}></span>
              <span className={styles.characteristicsValue}>{char.value}</span>
            </div>
          ))}
        </div>
        <div className={styles.advBlock}>
          {product.advantages && (
            <div className={styles.advantages}>
              <div className={styles.advTitle}>Преимущества</div>{" "}
              <div>{product.advantages}</div>
            </div>
          )}
          {product.disadvantages && (
            <div className={styles.disadvantages}>
              <div className={styles.advTitle}>Недостатки</div>{" "}
              <div>{product.disadvantages}</div>
            </div>
          )}
        </div>
        <Divider className={styles.hr2} />
        <div className={styles.actions}>
          <Button appearance="primary">Узнать подробнее</Button>
          <Button
            appearance="ghost"
            arrow={isReviewOpen ? "down" : "right"}
            className={styles.reviewButton}
            onClick={() => setIsReviewOpen((prev) => !prev)}
          >
            Читать отзывы
          </Button>
        </div>
      </Card>
      <Card
        color="blue"
        className={`${styles.review} ${
          isReviewOpen ? styles.opened : styles.closed
        }`}
        ref={reviewRef}
      >
        {product.reviews.map((r) => (
          <div key={r._id}>
            <Review review={r} />
            <Divider />
          </div>
        ))}
        <ReviewForm productId={product._id}/>
      </Card>
    </>
  );
};

export default Product;
