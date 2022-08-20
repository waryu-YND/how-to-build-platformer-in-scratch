---
title: "プレイヤーが落ちたらやり直し"
description: "プレイヤーが地面から落ちてしまったときに、スタートからやり直します"
category: "motion"
difficult: 2
---
## ヒント

スタート地点は、<code class="b">(x::variables)</code> が0、<code class="b">(y座標::motion)</code> が0のところです。

また、落ちたときに　<code class="b">(y座標::motion)</code> は、-180以下になります。

## やってみよう

以下のプログラムを作ろう

```
プレイヤーが落ちたとき、スタート地点に戻す
```

### もっとヒント

「もし～なら」の中身は、<code class="b"><(y座標::motion)\<(-180)::operator></code> です。

## 答え

<pre class="blocks">
@greenFlag が押されたとき
ずっと
  もし<(y座標::motion)\<(-180)::operator>なら
    y座標を(0)にする
    [x v]を(0)にする
  end
end
</pre>

これを「プレイヤー本体」に作ることで、落ちたときにスタートにやり直しになります
