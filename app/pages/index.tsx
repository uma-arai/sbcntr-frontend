import { BlitzPage, getSession, useRouter } from "blitz";
import Layout from "app/layouts/Layout";
import React from "react";
import Container from "@material-ui/core/Container";
import CopyrightComponent from "../components/molecules/copyright";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "../components/atoms/button";
import { useHelloMessage } from "../hooks/useHelloMessage";

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const UserInfo = () => {
  const router = useRouter();

  return (
    <>
      <Button
        onClick={async (event) => {
          router.push({
            pathname: "/login",
          });
        }}
      >
        ログイン
      </Button>
      <Button
        onClick={async (event) => {
          router.push({
            pathname: "/signup",
          });
        }}
      >
        サインアップ
      </Button>
    </>
  );
};

const Home: BlitzPage = () => {
  const hello = useHelloMessage();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <main>
        <div className="logo">
          <img src="/arai-uma.png" alt="sbcntr-frontend" />
        </div>
        <p>
          <strong>{hello}</strong>
        </p>
        <div
          className="buttons"
          style={{ marginTop: "1rem", marginBottom: "1rem" }}
        >
          <UserInfo />
        </div>
      </main>
      <CopyrightComponent />

      {/*TODO MUIのスタイルにする*/}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;700&display=swap");

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "Libre Franklin", -apple-system, BlinkMacSystemFont,
            Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
        }

        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          box-sizing: border-box;
        }
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main p {
          font-size: 1.2rem;
        }

        p {
          text-align: center;
        }

        footer {
          width: 100%;
          height: 60px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #45009d;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer a {
          color: #f4f4f4;
          text-decoration: none;
        }

        .logo {
          margin-bottom: 2rem;
        }

        .logo img {
          width: 300px;
        }

        .buttons {
          display: grid;
          grid-auto-flow: column;
          grid-gap: 0.5rem;
        }
        .button {
          font-size: 1rem;
          background-color: #6700eb;
          padding: 1rem 2rem;
          color: #f4f4f4;
          text-align: center;
        }

        .button.small {
          padding: 0.5rem 1rem;
        }

        .button:hover {
          background-color: #45009d;
        }

        .button-outline {
          border: 2px solid #6700eb;
          padding: 1rem 2rem;
          color: #6700eb;
          text-align: center;
        }

        .button-outline:hover {
          border-color: #45009d;
          color: #45009d;
        }

        pre {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          text-align: center;
        }
        code {
          font-size: 0.9rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </Container>
  );
};

Home.redirectAuthenticatedTo = "/top";
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>;

export default Home;
