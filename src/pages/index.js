import Head from "next/head";
import Link from "next/link";
import styles from "./home.module.css";
import Title from "../components/Titles/index";
import VectorBackground from "../components/Backgrounds/index";
import InputApp from "../components/Inputs";
import ButtonApp from "../components/Buttons";
import { useState,useContext } from "react";
import { LoadingContext } from "../contexts/LoadingContext"
import ApiClient from "../api/client"

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setLoading } = useContext(LoadingContext)

  const testeRequest = async function(){
    const res = await ApiClient.get("www.google.com.br")
    console.log(res.status)
  }


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
            <div className={styles.title}>
              <Title className={styles.title2}>Sign In</Title>
            </div>
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
            <button onClick={()=>setLoading(true)}>teste</button>
            <ButtonApp onClick={testeRequest}> Sign In</ButtonApp>
            <div className={styles.signup_container}>
              <div>Don’t have a account?</div>
              <Link href="/signup">
                <a className={styles.signup_link}>Sing up </a>
              </Link>
            </div>
          </section>
        </VectorBackground>
      </main>
    </div>
  );
}
