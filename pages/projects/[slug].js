import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Container from '../../components/container';
import PostBody from '../../components/post-body';
import PostHeader from '../../components/post-header';
import Layout from '../../components/layout';
import { getAllItemsByType, PROJECTS, getTypeBySlug } from '../../lib/api';
import PostTitle from '../../components/post-title';
import { AUTHOR_NAME } from '../../lib/constants';
import markdownToHtml from '../../lib/markdownToHtml';

export default function Project({ project }) {
  const router = useRouter();
  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <div className="w-full bg-dark p-2">
        <Container>
          {/* <FontAwesomeIcon icon={faArrowLeft}  className="text-primary text-3xl" /> */}
        </Container>
      </div>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article className="mb-32">
            <Head>
              <title>
                {AUTHOR_NAME} | {project.title}
              </title>
              <meta property="og:image" content={project.ogImage.url} />
            </Head>
            <PostHeader
              title={project.title}
              coverImage={project.coverImage}
              date={project.date}
              author={project.author}
            />
            <Container>
              <PostBody content={project.content} />
            </Container>
          </article>
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const project = getTypeBySlug(PROJECTS, params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage'
  ]);
  const content = await markdownToHtml(project.content || '');
  return {
    props: {
      project: {
        ...project,
        content
      }
    }
  };
}

export async function getStaticPaths() {
  const projects = getAllItemsByType(PROJECTS, ['slug']);

  return {
    paths: projects.map(project => {
      return {
        params: {
          slug: project.slug
        }
      };
    }),
    fallback: false
  };
}
