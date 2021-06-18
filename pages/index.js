import Container from '../components/container'
import RecentArticles from '../components/recent-posts'
import HeroPost from '../components/hero-post'
import Hero from '../components/hero'
import Layout from '../components/layout'
import { getRecentPosts } from '../lib/api'
import Head from 'next/head'
import { AUTHOR_NAME, AUTHOR_SLOGAN, CMS_NAME } from '../lib/constants'
import About from '../components/about'
import SectionSeparator from '../components/section-separator'

export default function Index({ recentPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>{AUTHOR_NAME} | {AUTHOR_SLOGAN}</title>
        </Head>
        <Hero />
        <Container>
          <About />
          <SectionSeparator />
          <RecentArticles posts={recentPosts} />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const recentPosts = getRecentPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { recentPosts },
  }
}
