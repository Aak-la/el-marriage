module.exports = {
    devServer: {
        proxy: {
          '/api': {
            target: "https://www.pexels.com/", 
            changeOrigin: true,
            logLevel: "debug"
          }
        }
      }
      
    }