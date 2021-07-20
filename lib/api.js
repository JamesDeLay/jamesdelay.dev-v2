import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

// TYPES
export const POSTS = 'posts';
export const PROJECTS = 'projects';
export const SNIPPETS = 'snippets'

const postsDirectory = join(process.cwd(), '_posts');
const projectDirectory = join(process.cwd(), '_projects');
const snippetDirectory = join(process.cwd(), '_snippets');

export function getSlugsByType(type = POSTS) {
  switch (type) {
    case POSTS:
      return fs.readdirSync(postsDirectory);
    case PROJECTS:
      return fs.readdirSync(projectDirectory);
    case SNIPPETS:
      return fs.readdirSync(snippetDirectory);
    default:
      throw new Error('INVALID API TYPE PASSED');
  }
}

export function getTypeBySlug(type, slug, fields = []) {
  let DIR;
  switch (type) {
    case POSTS:
      DIR = postsDirectory;
      break;
    case PROJECTS:
      DIR = projectDirectory;
      break;
    case SNIPPETS:
      DIR = snippetDirectory;
      break;
    default:
      throw new Error('INVALID API TYPE PASSED');
  }

  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(DIR, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  items.readTime = Math.ceil(fileContents.split(' ').length / 250);
  // items["readTime"] = fileContents

  return items;
}

export function getAllItemsByType(type, fields = []) {
  const slugs = getSlugsByType(type);
  const items = slugs
    .map(slug => getTypeBySlug(type, slug, fields))
    // sort posts by date in descending order
    .sort((item1, item2) => (item1.date > item2.date ? -1 : 1));
  return items;
}

export function getRecentItemsByType(type, fields = []) {
  return getAllItemsByType(type, fields)
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      }
      return -1;
    })
    .slice(0, 3);
}