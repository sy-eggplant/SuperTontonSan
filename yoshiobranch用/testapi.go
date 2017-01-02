package main

import ("github.com/gin-gonic/gin"
  _ "github.com/go-sql-driver/mysql"
  "fmt"
  "database/sql"
)
func main() {
    router := gin.Default()

    router.POST("/post", func(c *gin.Context) {

        ids := c.Query("id")
        page := c.DefaultQuery("page", "0")

        fmt.Printf("ids: %s; page: %s; name: %s; message: %s", ids, page,)
        //データベースに接続
            db, err := sql.Open("mysql", "root:admin@/testdb")
            checkErr(err)
            //データの挿入
            stmt, err := db.Prepare("INSERT users SET name=?")
            checkErr(err)
            res, err := stmt.Exec("yoshino")
            checkErr(err)
            id, err := res.LastInsertId()
               checkErr(err)

               fmt.Println(id)


    })
    router.Run(":8080")
}

// func Run() {
// 	r := gin.Default()
// 	r.GET("/2", func(c *gin.Context) {
//     c.JSON(200, gin.H{
//       "message": "pong",
//     })
//     //データベースに接続
//     db, err := sql.Open("mysql", "root:admin@/testdb")
//     checkErr(err)
//     //データの挿入
//     stmt, err := db.Prepare("INSERT users SET name=?")
//     checkErr(err)
//     res, err := stmt.Exec("yoshiko")
//     checkErr(err)
//     id, err := res.LastInsertId()
//        checkErr(err)
//
//        fmt.Println(id)
//     	})
// 	r.Run()
// }

func checkErr(err error){
  if err != nil{
    panic(err)
  }
}
