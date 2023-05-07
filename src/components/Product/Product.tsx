import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import styles from "./Product.module.css";
import { ProductModel } from "@/interfaces/product.inteface";

interface ProductProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    product: ProductModel
  }

const Product: FC<ProductProps> = ({product, className, ...props}) => {
  return <div className={`${className || ''} ${styles.product}`} {...props}>{product.title}</div>;
};

export default Product;
