import "@/styles/globals.css";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import NavBar from "./components/Navbar";
import {
  FBPixelScript,
  FBPixelProvider,
} from "@rivercode/facebook-conversion-api-nextjs/components";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>

      <DefaultSeo {...SEO} />
      <main>
        <FBPixelScript />
        <FBPixelProvider>
          <NavBar />
          <Component {...pageProps} />
        </FBPixelProvider>
      </main>
    </>
  );
}
