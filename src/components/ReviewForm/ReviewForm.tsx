import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import styles from "./ReviewForm.module.css";
import Input from "../Input/Input";
import Rating from "../Rating/Rating";
import Textarea from "../Textarea/Textarea";
import Button from "../Button/Button";
import CloseIcon from "./close.svg";
import { useForm, Controller } from "react-hook-form";
import { IReviewForm } from "@/interfaces/review.form.interface";

interface ReviewFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  productId: string;
}

const ReviewForm: FC<ReviewFormProps> = ({
  productId,
  className,
  ...props
}) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IReviewForm>();

  const onSubmit = (data: IReviewForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={`${className || ""} ${styles.reviewForm}`} {...props}>
        <Input
          {...register("name", {
            required: { value: true, message: "Заполните имя" },
          })}
          error={errors.name}
          placeholder="Имя"
        />
        <Input
          {...register("title", {
            required: { value: true, message: "Заполните заголовок" },
          })}
          error={errors.title}
          placeholder="Заголовок отзыва"
          className={styles.title}
        />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name="rating"
            rules={{ required: { value: true, message: "Поставьте оценку" } }}
            render={({ field }) => (
              <Rating
                isEditable
                ref={field.ref}
                error={errors.rating}
                rating={field.value}
                setRating={field.onChange}
              />
            )}
          />
        </div>
        <Textarea
          {...register("description", {
            required: { value: true, message: "Заполните описание" },
          })}
          error={errors.description}
          placeholder="Текст отзыва"
          className={styles.description}
        />
        <div className={styles.submit}>
          <Button appearance="primary" className={styles.submitButton}>
            Отправить
          </Button>
          <span>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </span>
        </div>
        <div className={styles.success}>
          <div className={styles.successTitle}>Ваш отзыв отправлен</div>
          <div>Спасибо, ваш отзыв будет опубликован после проверки</div>
          <CloseIcon className={styles.close} />
        </div>
      </div>
    </form>
  );
};

export default ReviewForm;
