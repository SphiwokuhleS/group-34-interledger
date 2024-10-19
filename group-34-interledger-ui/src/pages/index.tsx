import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <title>Basic Landing Page</title>
        <meta name="description" content="A simple Next.js app with basic structure" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to My Basic Next.js App!</h1>
        <p>This is a very simple landing page.</p>
      </main>
    </div>
  );
};

export default Home;