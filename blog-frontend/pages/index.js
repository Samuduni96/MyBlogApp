import { Fragment } from "react";
import Head from "next/head";
import { ContextProvider } from "@/context/Context";

function HomePage() {
  return (
    <Fragment>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Metal+Mania&family=Montserrat&display=swap" rel="stylesheet"/>
      </Head>
      <h1>Blog Page</h1>
    </Fragment>
  );
};

function HomePageWithProvider() {
  return (
    <ContextProvider>
      <HomePage/>
    </ContextProvider>
  );
}

export default HomePageWithProvider;