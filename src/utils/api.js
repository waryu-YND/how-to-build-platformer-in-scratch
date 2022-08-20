import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), 'content');

export const getPostSlugs = () => {
  const allDirents = fs.readdirSync(postsDirectory, { withFileTypes: true });
  return allDirents
    .filter((dirent) => dirent.isDirectory())
    .map(({ name }) => name);
};

/**
 * 与えられたslugから記事の内容を取得して返す
 * @param slug
 * @param fields 取得したい値 (slug | content | title | tags)
 */
export const getPostBySlug = (slug, fields = []) => {

  const fullPath = join(postsDirectory, slug, 'index.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {
    slug: '',
    content: '',
    title: '',
    description: '',
    category: '',
    difficult: ''
  };

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (field === 'title' || field === 'description' || field === 'category' || field === 'difficult') {
      items[field] = data[field];
    }
  });

  return items;
};

/**
 * すべての記事から指定したfieldsの値を取得する
 * @param fields 取得したい値
 */
export const getAllPosts = (fields = []) => {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((a, b) => {
      const difficultA = a.difficult;
      const difficultB = b.difficult;
      const categoryA = a.category.codePointAt(0);
      const categoryB = b.category.codePointAt(0);
      const slugA = a.slug.codePointAt(0);
      const slugB = b.slug.codePointAt(0);

      return categoryB - categoryA || difficultA - difficultB || slugA - slugB;
    });

  return posts;
};