package main

import ("github.com/gin-gonic/gin"
        _ "github.com/go-sql-driver/mysql"
        "database/sql"
        "fmt"
)

type User struct{
    Name string `json:"name"`
    Mail string `json:"mail"`
}
func main(){
  r := gin.Default()
  r.POST("/",func(c *gin.Context){
      var tmp = &User{}
      c.Bind(tmp)
      c.JSON(200,gin.H{
        "name": tmp.Name,
        "mails": tmp.Mail,
      })
          //データベースに接続
          db, err := sql.Open("mysql", "root:admin@/SuperTontonSan")
          checkErr(err)
          //データの挿入
          // stmt, err := db.Prepare("INSERT users SET user_name=? mail=?")
          stmt, err := db.Prepare("INSERT users SET user_name=?,mail=?")
          checkErr(err)
          res, err := stmt.Exec(tmp.Name,tmp.Mail)
          checkErr(err)
          id, err := res.LastInsertId()
          checkErr(err)
          fmt.Println(id)
  })
  r.Run()
}


func checkErr(err error){
  if err != nil{
    panic(err)
  }
}
