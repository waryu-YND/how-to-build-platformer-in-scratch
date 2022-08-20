---
title: "コースに新しいルールを追加する"
description: "コースに新しい色を追加し、その色にプレイヤーが触れたときにどうするかを設定します。"
category: "motion"
difficult: 2
---

## ヒント

コースの作り方は、[コースをもっと長く](/add-course) を見てください。  
ここで、地面を黒色で描いていますが、これを赤色にしてみたらどうなるでしょう。  
正解は、「すり抜けて落ちてしまう」です。これは、「黒色は地面」と決めているからです。  
そこで、「赤色はやり直し」と決めたいと思います。

まず、[コースをもっと長く](/add-course) より、赤色の地面を描きます。  
そして、ここで使うのが <code class="b"><[#FF0000]色に触れた::sensing></code> というブロックです。  
これを使って、「もし～なら」を作りましょう。

しかし、ここで注意しないといけないことがあり、<code class="b"><[#FF0000]色に触れた::sensing></code> の色と、コースの色は完全に同じものにしないと動きません。  
1と1.001が同じではないように、「色」「鮮やかさ」「明るさ」を全く同じにしてください。

## やってみよう

以下のプログラムを作ろう

```
赤色に触れたとき、スタートに戻る
```

### もっとヒント

スタート地点は、<code class="b">(x::variables)</code> が0、<code class="b">(y座標::motion)</code> が0のところです。

## 答え

<pre class="blocks">
@greenFlag が押されたとき
ずっと
  もし<[#FF0000]色に触れた::sensing>なら
    y座標を(0)にする
    [x v]を(0)にする
  end
end
</pre>

これを「プレイヤー本体」に作ることで、赤色に触れたときにスタートにやり直しになります

これは、やり直し以外にも、「高くジャンプする」「ゆっくりと落ちる」「ゴール」など、色々なところで活用できます。  
他にも自分なりにいろいろと作ってみましょう