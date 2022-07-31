---
layout: default
title: 22-07-11
---

# 22.07.11
DAアルゴリズムを実装しました。  

## DAアルゴリズム
１年以上前、プログラミング始めたての頃に書いたコードをウェブページ上で動かすためにリニューアルしました。当時書いたコードはネストがとても深くなっていて今となってはとても読みたくない"闇の深い"コードでした。  
今回リニューアルにあたって、アルゴリズムに参加する二つのグループそれぞれの「メンバー名の1次元配列」と「選好の2次元配列」を引数として渡すことで、関数内で全部処理してマッチング結果を出力できるようにしています。  
また結果として、ネストの深さは10から5に減らすことが出来ました。コードの行数も若干減らせています。これは、当時と比べて格段にJavascriptの知識、特に配列に関する知識が向上したおかげだと思います。  

## 疑問点
さらにネストを減らすことは可能なんでしょうか…。  
今回実は、無駄だったネストを減らしたほかに、ネストを1つ減らすために無駄な処理が増えた部分があります。  
マッチングに参加するメンバーの選好は二次元配列で保持します。二次元配列の要素をforループで全て網羅したかったら、縦方向のループと横方向のループを組み合わせることで網羅できるというのは想像がつきやすいと思います。このループを1つ減らしました。  
これを図書館に並んだ本棚に見立てると、アルゴリズム内でforループを2つネストして使い、  
「1列目の本棚を整理し終わったら直接2列目に行けていた」ところを、forループを1つ減らしたことで、  
「1列目の本棚を整理し終わった後入口に戻って一旦記憶喪失して1列目の本棚が整理されてるのを確認してから2列目の本棚に向かう」  
というような、現実世界なら無駄でしかない処理をしています。  
本棚整理作業の始点を親ループで各本棚にその都度設定出来ていたのが無くなり、作業の始点が図書館の入口に固定されてしまった、というような解釈です。  
たしかにネストは1つ分浅くなりましたが、無駄な処理が増えています。  
ネストが増える事と処理が増えて直観的で無くなる事、どちらの方が綺麗なコードなのでしょうか？  
コードを第三者が読んだとき読みやすいのはやはりネストが浅い方なのでしょうか…？  
スクリプトの実行時間はどちらにせよ体感できないぐらい速い軽い作業なので、多少処理が増えてもネストを減らした方が良いような気もしますが…。無駄な作業をさせているモヤモヤも残っています。  

## 参考文献・リンク
@DeployCat “ネストの深さは闇の深さ” Qiita  
https://qiita.com/DeployCat/items/1ec901864d4ab11c8d6f  
  
  
Javascriptで書いたDAアルゴリズム部分だけ抜き出してGithubに公開しました。  
https://github.com/Cachalot792/DAalgorithm  