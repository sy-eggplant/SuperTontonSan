package server

import (
	"database/sql"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/sy-eggplant/SuperTontonSan/server/model"
)

func Run() error {
	r := gin.Default()
	r.GET("api/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	r.GET("api/user/:id", func(c *gin.Context) {
		var i = c.Param("id")
		var ids int
		ids, _ = strconv.Atoi(i)
		var name string

		db, err := sql.Open("mysql", "root:password@/supertontonsan")
		c.JSON(http.StatusInternalServerError, err)

		stmtOut, err := db.Prepare("SELECT user_name FROM users WHERE id=?")
		c.JSON(http.StatusInternalServerError, err)

		defer stmtOut.Close()

		err = stmtOut.QueryRow(17).Scan(&name)
		c.JSON(200, gin.H{
			"ID":       ids,
			"UserName": name,
		})
	})

	r.POST("/api/user", func(c *gin.Context) {
		var tmp = model.User{}
		c.Bind(tmp)
		c.JSON(200, gin.H{
			"name": tmp.Name,
			"mail": tmp.Mail,
		})
		//データベースに接続
		db, err := sql.Open("mysql", "root:admin@/SuperTontonSan")
		c.JSON(http.StatusInternalServerError, err)
		//データの挿入
		// stmt, err := db.Prepare("INSERT users SET user_name=? mail=?")
		stmt, err := db.Prepare("INSERT users SET user_name=?,mail=?")
		c.JSON(http.StatusInternalServerError, err)
		res, err := stmt.Exec(tmp.Name, tmp.Mail)
		c.JSON(http.StatusInternalServerError, err)
		_, err = res.LastInsertId()
		c.JSON(http.StatusInternalServerError, err)
	})

	r.Run()

	return nil
}
