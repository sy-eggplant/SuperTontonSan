package main

import ("github.com/gin-gonic/gin"
        _ "github.com/go-sql-driver/mysql"
        "database/sql"
        "fmt"
        "strconv"
)

func main(){
    r := gin.Default()
    r.GET("/:id",func(c *gin.Context){
    var i = c.Param("id")
    var ids int
    ids, _ = strconv.Atoi(i)
    fmt.Println(ids)
    var name string



    db, err := sql.Open("mysql", "root:admin@/SuperTontonSan")
    checkErr(err)
    stmtOut,err := db.Prepare("SELECT user_name FROM users WHERE id=?")
    checkErr(err)
    defer stmtOut.Close()

    err = stmtOut.QueryRow(17).Scan(&name)

    fmt.Println(ids)
    fmt.Println(name)

    })

r.Run()


}



func checkErr(err error){
  if err != nil{
    panic(err)
  }
}
