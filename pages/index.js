import Head from 'next/head';
import Container from '../components/container';
import RecentArticles from '../components/recent-posts';
import SiteHero from '../components/site-hero';
import Layout from '../components/layout';
import { getRecentItemsByType, POSTS, PROJECTS } from '../lib/api';
import { AUTHOR_NAME, AUTHOR_SLOGAN } from '../lib/constants';
import About from '../components/about';
import SectionSeparator from '../components/section-separator';
import RecentProjects from '../components/recent-projects';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';

export default function Index({ recentPosts, recentProjects }) {
  config.autoAddCss = false;
  return (
    <>
      <Layout>
        <Head>
          <title>
            {AUTHOR_NAME} | {AUTHOR_SLOGAN}
          </title>
        </Head>
        <SiteHero />
        <Container>
          <About />
          <SectionSeparator />
          {recentPosts.length === 3 && (
            <>
              <RecentArticles posts={recentPosts} />
              <SectionSeparator />
            </>
          )}
          <RecentProjects projects={recentProjects} />
        </Container>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
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

  return {
    props: { recentPosts, recentProjects }
  };
}
