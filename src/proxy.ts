const proxyConfig = {
  '/api': {
    target: 'https://apigw.ypshengxian.com/request',
    changeOrigin: true,
    pathRewrite: {
      '/api': '',
    },
  },
}

export default proxyConfig
