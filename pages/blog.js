import Container from '../components/container'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { AUTHOR_NAME } from '../lib/constants'
import PageHero from '../components/page-hero'
import { useEffect, useState } from 'react'
import PostPreview from '../components/post-preview'
import SectionHeader from '../components/section-header'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Blog({posts}) {
  const [query, setQuery] = useState("")
  const [filteredPosts, setFilteredPosts] = useState(posts)

  useEffect(() => {
    setFilteredPosts(
      posts.filter(p => p.title.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    )
  }, [query])

  return (
    <>
      <Layout>
        <Head>
          <title>{AUTHOR_NAME} | Tech Blog</title>
        </Head>
        <PageHero 
          title="Tech Blog" 
          blurb="Tutorials, documentation, guides, and cool code things..." 
          />
        <Container>
        <div className="flex items-center justify-center p-xl mt-12 md:mt-16 w-3/4 md:w-2/3 m-auto bg-white rounded">
          <input className="w-full p-2" placeholder="Search for an article..." onChange={(e) => setQuery(e.target.value)} value={query}/>
          <FontAwesomeIcon icon={faSearch} className="text-gray-300 mr-2" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-y-12 pb-24 mt-12">
        {filteredPosts.map((post, idx) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            readTime={post.readTime}
            isFeatureCard={idx === 0 && !query}
          />)
        )}
      </div>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { posts },
  }
}
