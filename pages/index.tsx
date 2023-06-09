import Head from "next/head";
import { Inter } from "next/font/google";
import { Hero } from "@/components/Hero";
import styles from "@/styles/Home.module.scss";
import Link from "next/link";

import {
  SiAngular,
  SiCsharp,
  SiDotnet,
  SiGraphql,
  SiJavascript,
  SiMicrosoftazure,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTypescript,
  SiRemix,
  SiAmazonaws,
} from "react-icons/si";

import { DiSass } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { GetStaticProps } from "next";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Anday.dev - Berke Anday&apos;s Portfolio</title>
        <meta
          name="description"
          content="Berke Anday Baloğlu's portfolio website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <section className={styles.hero}>
          <hr />
          <Hero />
          <hr />
        </section>
        <section className={styles.about}>
          <p>
            I am a <span className={styles.emphasize}>software engineer</span>,
            enthusiastic and passionate about web development technologies.
          </p>
        </section>
        <section className={styles.technologies}>
          <p>I like to work and have experience with</p>
          <section className={styles.techChipGroup}>
            <div className={styles.techChip}>
              <Link href="/projects?tag=typescript">
                <SiTypescript className={styles.icon} />
                <span>Typescript</span>
              </Link>
            </div>
            <div className={styles.techChip}>
              <Link href="/projects?tag=javascript">
                <SiJavascript className={styles.icon} />
                <span>Javascript</span>
              </Link>
            </div>
            <div className={styles.techChip}>
              <Link href="/projects?tag=react">
                <SiReact className={styles.icon} />
                <span>React</span>
              </Link>
            </div>
            <div className={styles.techChip}>
              <Link href="/projects?tag=nextjs">
                <SiNextdotjs className={styles.icon} />
                <span>Next.js</span>
              </Link>
            </div>
            <div className={styles.techChip}>
              <Link href="/projects?tag=remix">
                <SiRemix className={styles.icon} />
                <span>Remix</span>
              </Link>
            </div>
            <div className={styles.techChip}>
              <Link href="/projects?tag=angular">
                <SiAngular className={styles.icon} />
                <span>Angular</span>
              </Link>
            </div>
            <div className={styles.techChip}>
              <Link href="/projects?tag=nodejs">
                <FaNodeJs className={styles.icon} />
                <span>Node.js</span>
              </Link>
            </div>
            <div className={styles.techChip}>
              <Link href="/projects?tag=csharp">
                <SiCsharp className={styles.icon} />
                <span>C#</span>
              </Link>
            </div>
            <div className={styles.techChip}>
              <Link href="/projects?tag=dotnet">
                <SiDotnet className={styles.icon} />
                <span>DotNet</span>
              </Link>
            </div>
            <div className={styles.techChip}>
              <Link href="/projects?tag=azure">
                <SiMicrosoftazure className={styles.icon} />
                <span>Azure</span>
              </Link>
            </div>
            <div className={styles.techChip}>
              <Link href="/projects?tag=aws">
                <SiAmazonaws className={styles.icon} />
                <span>AWS</span>
              </Link>
            </div>
            <div className={styles.techChip}>
              <Link href="/projects?tag=sass">
                <DiSass className={styles.icon} />
                <span>Sass</span>
              </Link>
            </div>
            <div className={styles.techChip}>
              <Link href="/projects?tag=redux">
                <SiRedux className={styles.icon} />
                <span>Redux</span>
              </Link>
            </div>
            <div className={styles.techChip}>
              <Link href="/projects?tag=graphql">
                <SiGraphql className={styles.icon} />
                <span>GraphQL</span>
              </Link>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      data: "data",
    },
  };
};
