"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { MyServerLink } from "./components/my-server-link";
import { MyClientLink } from "./components/my-client-link";
import { useState } from "react";

export default function Home() {
  const [clicked, setClicked] = useState<boolean>();
  const [clicked2, setClicked2] = useState<boolean>();

  return (
    <main className={styles.main}>
      <button onClick={() => setClicked(!clicked)}>
        Show show/hidden text for clicked
      </button>
      {clicked && <>this text should appear for clicked</>}

      <button onClick={() => setClicked2(!clicked2)}>
        Show show/hidden text for clicked2
      </button>
      {clicked2 && <>this text should appear for clicked2</>}

      {clicked && clicked2 && (
        <>this text should appear for clicked and clicked 2</>
      )}

      <div>
        {/* <MyClientLink name="Go to the Test page (Client Link)" href="/test" /> */}
        <br />
        <br />
        {/* <MyServerLink name="Go to the Test page (Server Link)" href="/test" /> */}
        <br />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className={styles.description}>
        <div>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </div>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
