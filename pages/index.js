import Head from 'next/head';
import Container from '../components/container';
import RecentArticles from '../components/recent-posts';
import Hero from '../components/hero';
import Layout from '../components/layout';
import { getRecentItemsByType, POSTS } from '../lib/api';
import { AUTHOR_NAME, AUTHOR_SLOGAN } from '../lib/constants';
import About from '../components/about';
import SectionSeparator from '../components/section-separator';

export default function Index({ recentPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>
            {AUTHOR_NAME} | {AUTHOR_SLOGAN}
          </title>
        </Head>
        <Hero />
        <Container>
          <About />
          <SectionSeparator />
          <RecentArticles posts={recentPosts} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const recentPosts = getRecentItemsByType(POSTS, [
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt'
  ]);
  return {
    props: { recentPosts }
  };
}
