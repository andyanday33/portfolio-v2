import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { AnimatedHero } from "@/components/AnimatedHero";
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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <section className={styles.hero}>
          <hr />
          <AnimatedHero />
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
              </Link>
              <span>Typescript</span>
            </div>
            <div className={styles.techChip}>
              <Link href="/projects?tag=javascript">
                <SiJavascript className={styles.icon} />
              </Link>
              <span>Javascript</span>
            </div>
            <div className={styles.techChip}>
              <Link href="/projects?tag=react">
                <SiReact className={styles.icon} />
              </Link>
              <span>React</span>
            </div>
            <div className={styles.techChip}>
              <Link href="/projects?tag=nextjs">
                <SiNextdotjs className={styles.icon} />
              </Link>
              <span>Next.js</span>
            </div>
            <div className={styles.techChip}>
              <Link href="/projects?tag=remix">
                <SiRemix className={styles.icon} />
              </Link>
              <span>Remix</span>
            </div>
            <div className={styles.techChip}>
              <Link href="/projects?tag=angular">
                <SiAngular className={styles.icon} />
              </Link>
              <span>Angular</span>
            </div>
            <div className={styles.techChip}>
              <Link href="/projects?tag=nodejs">
                <FaNodeJs className={styles.icon} />
              </Link>
              <span>Node.js</span>
            </div>
            <div className={styles.techChip}>
              <Link href="/projects?tag=csharp">
                <SiCsharp className={styles.icon} />
              </Link>
              <span>C#</span>
            </div>
            <div className={styles.techChip}>
              <Link href="/projects?tag=dotnet">
                <SiDotnet className={styles.icon} />
              </Link>
              <span>DotNet</span>
            </div>
            <div className={styles.techChip}>
              <Link href="/projects?tag=azure">
                <SiMicrosoftazure className={styles.icon} />
              </Link>
              <span>Azure</span>
            </div>
            <div className={styles.techChip}>
              <Link href="/projects?tag=aws">
                <SiAmazonaws className={styles.icon} />
              </Link>
              <span>AWS</span>
            </div>
            <div className={styles.techChip}>
              <Link href="/projects?tag=sass">
                <DiSass className={styles.icon} />
              </Link>
              <span>Sass</span>
            </div>
            <div className={styles.techChip}>
              <Link href="/projects?tag=redux">
                <SiRedux className={styles.icon} />
              </Link>
              <span>Redux</span>
            </div>
            <div className={styles.techChip}>
              <Link href="/projects?tag=graphql">
                <SiGraphql className={styles.icon} />
              </Link>
              <span>GraphQL</span>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}
