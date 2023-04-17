import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HTag from "@/components/HTag/HTag";
import Button from "@/components/Button/Button";
import P from "@/components/Paragraph/Paragraph";
import Tag from "@/components/Tag/Tag";
import Rating from "@/components/Rating/Rating";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <HTag tag='h1'>
          Something
        </HTag>
        <HTag tag='h2'>
          Something
        </HTag>
        <HTag tag='h3'>
          Something
        </HTag>
        <Button appearance="primary" arrow="right">
          Submit
        </Button>
        <Button appearance="ghost" arrow="down">
          Submit
        </Button>
        <P size="L">Big</P>
        <P>Medium</P>
        <P size="S">Small</P>
        <Tag size="M" >Medium</Tag>
        <Tag size="S" >Small</Tag>
        <Tag size="M" color="ghost" >Ghost</Tag>
        <Tag size="M" color="green" >Ghost</Tag>
        <Tag size="M" color="primary" >Ghost</Tag>
        <Tag size="M" color="gray" href="#">Ghost</Tag>
        <Rating rating={4}/>
      </main>
    </>
  );
}
