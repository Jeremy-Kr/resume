import Head from "next/head";
import {
  Contact,
  Experiences,
  Info,
  Projects,
  Skills,
  Stacks,
} from "@/components";

export default function Home() {
  return (
    <>
      <Info />
      <Contact />
      <Stacks />
      <Projects />
      <Skills />
      <Experiences />
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
