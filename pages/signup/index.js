import Head from "next/head";
import styles from "../../styles/pages/SignUp.module.css";
import Title from "../../components/titles/Title";
import VectorBackground from "../../components/backgrounds/VectorBackground";
import InputApp from "../../components/inputs/InputApp";
import ButtonApp from "../../components/buttons/ButtonApp";
import Link from "next/link";
import { useState } from "react";
export default function SignUp() {

  const [tenanty, setTenanty] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className={styles.container}>
      <Head>
        <title>Sign In</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <VectorBackground>
          <section className={styles.form}>
            <div  className={styles.title}>
              <Title>Sign Up</Title>
            </div>
            <InputApp
              label="Tenanty"
              placeholder=""
              required
              onChange={(event) => setTenanty(event.target.value)}
            ></InputApp>
            <InputApp
              label="Name"
              placeholder=""
              required
              onChange={(event) => setName(event.target.value)}
            ></InputApp>
            <InputApp
              label="Email"
              placeholder="user@email.com"
              required
              onChange={(event) => setEmail(event.target.value)}
            ></InputApp>
            <InputApp
              label="Password"
              placeholder="******"
              required
              onChange={(event) => setPassword(event.target.value)}
            ></InputApp>
            <InputApp
              label="Confirm Password"
              placeholder="******"
              required
              onChange={(event) => setConfirmPassword(event.target.value)}
            ></InputApp>
            <ButtonApp>Sign In</ButtonApp>
            <div className={styles.signup_container}>
              <div>Already have a account?</div>
              <Link href="/">
                <a className={styles.signup_link}>Sing in </a>
              </Link>
            </div>
          </section>
        </VectorBackground>
      </main>
    </div>
  );
}
