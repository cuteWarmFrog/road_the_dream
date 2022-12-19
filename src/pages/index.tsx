import { type NextPage } from "next";
import Head from "next/head";
import { Name } from "../components/name";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Road the dream!</title>
        <meta name="description" content="Livshits Victor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black h-screen w-screen grid items-center">
          <Name />
      </main>
    </>
  );
};

export default Home;
