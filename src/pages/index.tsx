import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

import { Provider } from 'react-redux'

import store from "@/store";
import MyPage from "./my_page";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {

  // store.subscribe(()=>{
  //   let spanElement = document.getElementById('counterTxt');
  //   if(spanElement) spanElement.innerHTML = store.getState().counter.value.toString();

  //   console.log(store.getState().todo);
  // });

  return (
    <>
    <Provider store={store}>
      <Head>
        <title>Multi Reducer Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <MyPage key="1"/>
        </main>
        <footer className={styles.footer}>
          Counter Reducer
          & Todo Reducer
        </footer>
      </div>
    </Provider>
    </>
  );
}
