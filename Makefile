# 全体の環境構築を管理

setup:
	go get github.com/rubenv/sql-migrate/...
	go get github.com/tools/godep
	cd server && godep get

build:
	cd server && godep go build -o cmd/main cmd/main.go
	#まだ動かない。あとでbuildできるようにする
	#cd client && npm run build	

run:
	server/cmd/main


