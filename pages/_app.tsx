import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Projects from "./projects";
import Services from "./Services";
import Footer from "./footer";
import Pageproject from "./pageproject";
import Head from "next/head";


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
    <Head>
        <link rel="icon" href="/blocks/profilephoto.jpg" />
        <title>Hardik Jain | Portfolio</title>
      </Head>
      <Navbar />
      {router.pathname === "/" ? (
        <>
          <Component {...pageProps} />
          <Projects />
          <Services />
        </>
      ) : (
        <Component {...pageProps} />

      )}
      <Footer />

    </>
  );
}
