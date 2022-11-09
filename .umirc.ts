import { defineConfig } from 'umi';
import routes from './routes';
import path from 'path';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history: {
    type: 'hash',
  },
  hash: true,
  mfsu: {},
  fastRefresh: {},
  routes,
  alias: {
    cmcss: path.resolve(__dirname, './src/assets/styles'),
    '@': path.resolve(__dirname, './src'),
  },
  chainWebpack: (config) => {
    config.module
      .rule('iconfont')
      .test(/iconfont\.(js)$/)
      .use('iconfont')
      .loader(path.resolve('./src/utils/loaders/removeIconPrefix.js'));
  },
  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false,
});
