import Head from "next/head";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Tinas Kitchen</title>
        <meta name="description" content="Website for your best meals " />
      </Head>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
