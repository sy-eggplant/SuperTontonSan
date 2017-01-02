# 幹事を助けるアプリ

## 開発方法

1. 追加したい昨日でbranchを切る　
1. commitしてPRを出す
1. LGTMもらえたらMerge

## 環境構築

```sh
make setup
```

## build

```sh
make build
```

#yoshiobranch用でtestコードなど
#現状はどう書けばどういう動きをするのかまで
#testapi.go→db操作(現状はposttestのコードをやる前によくわからん状態でやりすぎて動かなくなっているのでこれを修正していく予定)
#posttest→postでデータ送信の仕組みを理解するためのただのテストコード