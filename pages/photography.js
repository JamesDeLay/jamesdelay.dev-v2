import Head from 'next/head';
import Container from '../components/container';
import Layout from '../components/layout';
import { AUTHOR_NAME } from '../lib/constants';
import PageHero from '../components/page-hero';

export default function Photography() {
  return (
    <>
      <Layout>
        <Head>
          <title>{AUTHOR_NAME} | Photography</title>
        </Head>
        <PageHero
          title="Photography"
          blurb="Cool pictures of nature and stuff."
        />
        <Container>
          <div />
        </Container>
      </Layout>
    </>
  );
}

// export async function getStaticProps() {
//   const posts = getAllPosts([
//     'title',
//     'date',
//     'slug',
//     'author',
//     'coverImage',
//     'excerpt',
//   ])

//   return {
//     props: { posts },
//   }
// }
