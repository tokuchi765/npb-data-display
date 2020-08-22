package main

import (
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestServerListing(t *testing.T) {
	router := setupRouter()

	patterns := []struct {
		statusCode int
		method     string
		url        string
	}{
		{200, "GET", "/"},
		{200, "GET", "/image/central"},
		{200, "POST", "/analysis/league"},
		{400, "POST", "/analysis/error"},
		{200, "GET", "/analysis/isAnalyzed"},
		{400, "GET", "/analysis/error"},
	}

	for _, pattern := range patterns {
		w := httptest.NewRecorder()
		req, _ := http.NewRequest(pattern.method, pattern.url, nil)
		router.ServeHTTP(w, req)
		assert.Equal(t, pattern.statusCode, w.Code)
	}
}
