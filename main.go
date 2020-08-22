package main

import (
	"log"
	"net/http"
	"os"
	"os/exec"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

func setupRouter() *gin.Engine {
	router := gin.Default()

	// CORS対策
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:3000"}
	router.Use(cors.New(config))

	router.Use(static.Serve("/", static.LocalFile("./frontend/build", true)))
	router.GET("/image/:league", getImage)
	router.POST("/analysis/:mode", postAnalysis)
	router.GET("/analysis/:mode", getAnalysis)

	return router

}

func main() {
	router := setupRouter()
	router.Run()
}

func getImage(c *gin.Context) {
	c.File("./analysis/plot/" + c.Param("league") + "_baseball.png")
}

func postAnalysis(c *gin.Context) {
	mode := c.Param("mode")
	if mode == "league" {
		_, err := exec.Command("powershell", "python ./analysis/analysis.py").Output()
		if err != nil {
			log.Fatal(err)
		} else {
			c.JSON(http.StatusOK, gin.H{
				"rest": "success:" + mode,
			})
		}

	} else {
		c.JSON(http.StatusBadRequest, gin.H{
			"rest": "failed:Not found " + mode,
		})
	}
}

func getAnalysis(c *gin.Context) {
	mode := c.Param("mode")
	if mode == "isAnalyzed" {
		_, err := os.Stat("./analysis/plot/central_baseball.png")
		if os.IsNotExist(err) {
			c.JSON(http.StatusOK, gin.H{
				"isAnalyzed": false,
			})
		} else {
			c.JSON(http.StatusOK, gin.H{
				"isAnalyzed": true,
			})
		}

	} else {
		c.JSON(http.StatusBadRequest, gin.H{
			"rest": "failed:Not found " + mode,
		})
	}
}
