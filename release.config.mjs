import config from '@kubosho/configs/semantic_release/index.mjs';

export default {
  ...config,
  plugins: [...config.plugins, '@semantic-release/npm'],
};
