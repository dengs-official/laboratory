const path = require('path');
const webpack = require('webpack');

const r = (dir) => path.resolve(__dirname, dir);

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BASE_URL : '/',
  runtimeCompiler: true,
  productionSourceMap: false,
  configureWebpack: (config) => {
    const webpackConfig = {
      plugins: [
        new webpack.IgnorePlugin({
          resourceRegExp: /^\.\/locale$/,
          contextRegExp: /moment$/,
        }),
      ],
      devtool: 'source-map',
    };

    return webpackConfig;
  },

  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
        paths: [r('./src/styles')],
        // 覆盖antd默认样式
        modifyVars: {
          // 'border-radius-base': '0',
        },
        globalVars: {
          // primary: '#fff'
        },
      },
    },
  },
  devServer: {
    disableHostCheck: true,
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    port: 8000,
    proxy: {
      '/apis': {
        target: process.env.VUE_APP_API_ORIGIN,
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/apis': '',
        },
      },
      '/portal': {
        target: process.env.VUE_APP_API_AUTH,
        ws: false,
        changeOrigin: true,
      },
    },
  },
};
