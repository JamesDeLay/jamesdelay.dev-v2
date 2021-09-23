import Head from 'next/head';
import Container from '../components/container';
import RecentArticles from '../components/recent-posts';
import Hero from '../components/hero';
import Layout from '../components/layout';
import {
  getAllItemsByType,
  getRecentItemsByType,
  POSTS,
  PROJECTS,
  SNIPPETS
} from '../lib/api';
import { AUTHOR_NAME, AUTHOR_SLOGAN } from '../lib/constants';
import About from '../components/about';
import SectionSeparator from '../components/section-separator';
import RecentProjects from '../components/recent-projects';
import CoolStuff from '../components/recent-snippets';

export default function Index({ recentPosts, recentProjects, recentSnippets }) {
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
          <SectionSeparator />
          <RecentProjects projects={recentProjects} />
          {/* <SectionSeparator /> */}
          {/* <CoolStuff snippets={recentSnippets} /> */}
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

  const recentProjects = getRecentItemsByType(PROJECTS, [
    'title',
    'date',
    'slug',
    'technologies',
    'coverImage',
    'excerpt',
    'githubLink'
  ]);

  const recentSnippets = getAllItemsByType(SNIPPETS, [
    'name',
    'language',
    'tags',
    'content'
  ]);

  return {
    props: { recentPosts, recentProjects, recentSnippets }
  };
}
