import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import Layout from "~/components/Layout";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
return (  
  <>
  <Head>
    <title>Arthur Zimuldinov</title>
    <meta name="description" content="Portfolio home page" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <Layout>
    <Component {...pageProps} />
  </Layout>
  </>
  )
};

export default MyApp;
