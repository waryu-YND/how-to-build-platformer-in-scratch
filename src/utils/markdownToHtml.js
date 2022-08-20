import { remark } from "remark"
import html from "remark-html"
import {visit} from 'unist-util-visit'
import { url } from "./config"

function remarkUrl() {
  function transformer(tree) {
    visit(tree, "image", (node) => {
      node.url = url("/content" + node.url);
    });
    visit(tree, "link", (node) => {
      node.url = url("/docs" + node.url);
    });
  }
  return transformer;
}

/**
 * remarkによるmarkdownの構文変換を行う
 * @param markdown markdown記法で書かれたプレーンテキスト
 * @returns 変換結果をString化したもの
 */
export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(remarkUrl)
    .use(html, {sanitize: false})
    .process(markdown);
  return result.toString();
}