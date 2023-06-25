import { resolve } from 'path';
import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import svgLoader from 'vite-svg-loader';

import child_process from 'child_process';
const commitHash = child_process.execSync('git rev-parse --short HEAD').toString().trim();
const commitYear = child_process.execSync('git log --pretty=format:"%cd" HEAD -1 --date=format:"%Y"').toString().trim();
const commitTimes = child_process.execSync('git rev-list HEAD | wc -l | awk "{print $1}"').toString().trim();
const branch = child_process.execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
const commitTime = child_process.execSync('git log --pretty=format:"%cd" HEAD -1 --date=format:"%Y-%m-%d %H:%M:%S"').toString().trim();

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
      },
    },
    plugins: [
      vue(),
      svgLoader(),
      Components({
        resolvers: [AntDesignVueResolver()],
      }),
    ],
    define: {
      'process.platform': null,
      'process.version': null,
      GLOBAL_VAR: {
        COMMIT_ID: commitHash,
        COMMIT_YEAR: commitYear,
        COMMIT_TIMES: commitTimes,
        BRANCH: branch,
        COMMIT_TIME: commitTime,
      },
    },
  },
});
