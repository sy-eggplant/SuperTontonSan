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

##yoshiobranch用でtestコードなど
1.yoshiobranch用に移動
2.DBが存在している前提で
3.go run postapi.go
4.curl -X POST -H 'Content-Type: application/json' -d '{"name":"名前","mail":"アドレス"}' http://localhost:8080/

jsonで送信してjsonで返ってくる。DBにも挿入されている。
