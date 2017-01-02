package main

import ("github.com/gin-gonic/gin"
  _ "github.com/go-sql-driver/mysql"
  "fmt"
  // "database/sql"
  "net/http"
)

func main() {

    server := gin.Default()
    server.LoadHTMLGlob("templates/*")
      server.GET("/index",func(c *gin.Context){
        c.HTML(http.StatusOK, "index.tmpl", gin.H{
               "title": "Main website",
           })
    })
    server.POST("/signuped", SignupedRoute)

    server.Run(":8080")
}


func SignupedRoute(g *gin.Context) {
    g.Request.ParseForm()
    fmt.Println(g.Request.Form["id"])
    fmt.Println(g.Request.Form["name"])
}
