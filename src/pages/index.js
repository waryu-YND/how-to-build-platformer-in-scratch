import Layout from '../components/layout'
import Head from 'next/head'
import { url } from '../utils/config'
import { getAllPosts } from '../utils/api'
import PostLink from '../components/postlink'
import Script from 'next/script'

export default function Home({ allPosts }) {
  return (
    <div>
      <Head>
        <title>How to build platformer in Scratch</title>
      </Head>
      <div className="hero w-full my-8">
        <div className="hero-content flex-row border-b">
          <div className="mr-2 h-96 overflow-hidden">
            <pre className="blocks py-8 animate-[hero-animation_10s_infinite_alternate_cubic-bezier(.77,0,.18,1)]">{`
              @greenFlag が押されたとき::events hat
              x座標を(0)、y座標を(0)にする
              [X速度 v]を(0)にする
              [Y速度 v]を(0)にする
              ずっと
                [Y速度 v]を(-1)ずつ変える
                もし<[右向き矢印 v]キーが押された>なら
                  [X速度 v]を(1)ずつ変える
                end
                もし<[左向き矢印 v]キーが押された>なら
                  [X速度 v]を(-1)ずつ変える
                end
                [X速度 v]を((X速度)*(0.9))にする
                x座標を(X速度)ずつ変える
                もし<[#000000]色に触れた>なら
                  y座標を(1)ずつ変える
                end
                もし<[#000000]色に触れた>なら
                  y座標を(1)ずつ変える
                end
                もし<[#000000]色に触れた>なら
                  y座標を(1)ずつ変える
                end
                もし<[#000000]色に触れた>なら
                  y座標を(1)ずつ変える
                end
                もし<[#000000]色に触れた>なら
                  y座標を(-4)ずつ変える
                  x座標を((-1)*(X速度))ずつ変える
                  [X速度 v]を(0)にする
                end
                y座標を(-10)ずつ変える
                もし<<[上向き矢印 v]キーが押された>かつ<[#000000]色に触れた>>なら
                  [Y速度 v]を(15)にする
                end
                y座標を(10)ずつ変える
                y座標を(Y速度)ずつ変える
                もし<[#000000]に触れた>なら
                  y座標を((0)-(Y速度))ずつ変える
                  [Y速度 v]を(0)にする
                end
              end
            `}</pre>
          </div>
          <div>
            <h1 className="text-5xl font-bold">How to build platformer in Scratch</h1>
            <h2 className="text-4xl mt-2">Scratchでつくるプラットフォームゲーム</h2>
            <p className="mt-4">
              ここではScratchでプラットフォームゲームをつくる方法について解説しています。
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center text-3xl font-bold">一覧</p>
        <div>
          {allPosts?.map((post) => (
            <PostLink key={post.slug} title={post.title} description={post.description} slug={post.slug} category={post.category} difficult={post.difficult}/>
          ))}
        </div>
      </div>
      <Script src={url(`/scratchblocks.js?v=${new Date().getTime()}`)} type="module" />
    </div>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["slug", "title", "description", "category", "difficult"]);

  return {
    props: {allPosts}
  }
}
