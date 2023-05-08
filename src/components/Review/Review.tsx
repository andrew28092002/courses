import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import styles from './Review.module.css'
import { ReviewModel } from '@/interfaces/product.inteface'
import UserIcon from './user.svg'
import Rating from '../Rating/Rating'

interface ReviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    review: ReviewModel
}

const Review: FC<ReviewProps> = ({review, className, ...props}) => {
    const {name, title, description, createdAt, rating } = review
  return (
    <div className={`${className || ''} ${styles.review}`} {...props}>
        <UserIcon />
        <div className={styles.user}>
            <span className={styles.name}>{name}: </span>
            <span>{title}</span>
        </div>
        <div className={styles.date}>
            {String((createdAt))}
        </div>
        <div className={styles.rating}>
            <Rating rating={rating} />
        </div>
        <div className={styles.description}>
            {description}
        </div>
    </div>
  )
}

export default Review