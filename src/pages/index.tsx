import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HTag from "@/components/HTag/HTag";
import Button from "@/components/Button/Button";
import P from "@/components/Paragraph/Paragraph";

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
      </main>
    </>
  );
}
