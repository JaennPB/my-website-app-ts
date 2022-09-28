import type { NextPage } from "next";
import Head from "next/head";

import styled from "styled-components";

import Dashboard from "../components/Dashboard";
import NavLeft from "../components/NavLeft";
import NavTop from "../components/NavTop";

const Main = styled.main`
  background-color: #03355d;
  height: 100vh;

  color: white;

  display: grid;
  grid-template-columns: 6rem 1fr;
  grid-template-rows: 6rem 1fr;

  overflow: hidden;
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jaenn Poumian | Software Dev</title>
        <meta name="description" content="Created with Next.js by JaennPB" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <NavTop />
        <NavLeft />
        <Dashboard />
      </Main>
    </>
  );
};

export default Home;
