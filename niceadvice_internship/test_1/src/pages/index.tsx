import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  // console.log(allPostsData);
  return {
    props: {
      allPostsData,
    },
  };
}

// const inter = Inter({ subsets: ['latin'] })

type Prop = {
    id: string;
    date: string;
    title: string;
}
type Props = {
  allPostsData: Prop[]
}

export default function Home({ allPostsData }: Props) {
  return (
    <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={utilStyles.headingMd}>
      <p>[Your Self Introduction]</p>
      <p>
        (This is a sample website - you’ll be building a site like this on{' '}
        <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
      </p>
      <h2>
        <Link href="/posts/first-post">First Post</Link>
      </h2>
    </section>
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
  </Layout>

  )
}