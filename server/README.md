# 環境構築

とりあえず、

```sh
go get github.com/sy-eggplant/SuperTontonSan
```

ができるようにする。


## goの使用ライブラリをインストール

```sh
make setup
```

これで、goのパッケージ管理ツールであるgodep,
sqlのmigrationを行うsql-migrateをインストール？している

その後、godepで依存パッケージがあれば、それらをインストールしている

#### 詳細はMakefile

## データベースの作成

Mysqlに

```sh
mysql -u root -p
```

で入れる状態を想定

```sh
make migrate/init
```

でデータベースの作成をしている

## migration

```sh
make migrate/up
```

で```migration```ファイルの中のsqlを実行してmigrateしている

#### とりあえずここまで、開発環境は整うはずである

## ビルド

```sh
make build
```

## 実行

```sh
make run
```
