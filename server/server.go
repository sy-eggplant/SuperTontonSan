package server

import (
	"database/sql"
	"fmt"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
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
		fmt.Println(ids)
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

	r.Run()

	return nil
}

func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}
