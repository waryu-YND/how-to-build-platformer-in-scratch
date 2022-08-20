import { getAllPosts, getPostBySlug } from "../../utils/api";
import Head from "next/head";
import markdownToHtml from "../../utils/markdownToHtml";
import Layout from "../../components/layout";
import { url } from "../../utils/config";
import Script from "next/script";

export const getStaticPaths = async () => {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug
        }
      }
    }),
    fallback: false
  }
}

export const getStaticProps = async ({params}) => {
  const post = getPostBySlug(params.slug, [
    "slug",
    "title",
    "content",
    "category",
    "difficult"
  ]);

  const content = await markdownToHtml(post.content);

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  }
}

export default function Post({ post }){
  let categoryPath;
  switch (post.category) {
    case "motion":
    case "looks":
    case "sound":
    case "events":
    case "control":
    case "sensing":
    case "operators":
    case "variables":
    case "list":
    case "custom":
      categoryPath = `/block/${post.category}.svg`;
      break;
    default:
      categoryPath = "/block/etc.svg";
      break;
  }

  return (
    <article className="bg-base-200 min-h-screen overflow-hidden">
      <Head>
        <title>{post.title+" - HTB platformer in Scratch"}</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.1.0/github-markdown.min.css" integrity="sha512-KUoB3bZ1XRBYj1QcH4BHCQjurAZnCO3WdrswyLDtp7BMwCw7dPZngSLqILf68SGgvnWHTD5pPaYrXi6wiRJ65g==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      <section className="bg-base-100 text-base-content max-w-screen-lg mx-auto min-h-screen markdown-body py-6 px-8 my-4 ![--color-canvas-default:#fff] [--color-canvas-subtle:#fff] [--color-neutral-muted:#fff]">
        <div className="flex">
          <img src={url(categoryPath)} alt={post.category} className="h-16 w-16 flex-none !bg-transparent"/>
          <p className="!my-auto ml-4 text-lg font-bold">難易度：</p>
          <div className="h-16 w-auto flex-none flex justify-center items-center">
            {[...Array(post.difficult)].map((_,i) => {return <img key={i} src={url("/star_black.svg")} alt="" className="h-8 w-8 !bg-transparent"/>})}
            {[...Array(5 - post.difficult)].map((_,i) => {return <img key={i + 4} src={url("/star_border_black.svg")} alt="" className="h-8 w-8 !bg-transparent"/>})}
          </div>
          <p className="!my-auto ml-4 text-4xl font-bold">{post.title}</p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.content }}/>
      </section>
      <Script src={url(`/scratchblocks.js?v=${new Date().getTime()}`)} type="module" />
    </article>
  )
}