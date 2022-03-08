import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Welcome to Next.js</h1>
      <Link href='/about'>
        <a>To about page</a>
      </Link>
    </div>
  );
};

export default Home;
