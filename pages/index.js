<<<<<<< Updated upstream
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
=======
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
import RecentSnippets from '../components/recent-snippets';

export default function Index({ recentPosts, recentProjects, recentSnippets }) {
>>>>>>> Stashed changes
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
<<<<<<< Updated upstream
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
=======
          <About />
          <SectionSeparator />
          <RecentArticles posts={recentPosts} />
          <SectionSeparator />
          <RecentProjects projects={recentProjects} />
          <SectionSeparator />
          <RecentSnippets snippets={recentSnippets} />
>>>>>>> Stashed changes
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
<<<<<<< Updated upstream
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
=======
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
>>>>>>> Stashed changes
}
