import { resolve } from 'path';
import { loadEnv } from 'vite';
import { defineConfig, defineViteConfig, externalizeDepsPlugin } from 'electron-vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import * as child_process from 'child_process';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

const commitHash = child_process.execSync('git rev-parse --short HEAD').toString().trim();

function proxyParse(s: string) {
  const list = JSON.parse(s);
  const proxy: any = {};
  for (const [prefix, target] of list) proxy[prefix] = { target, changeOrigin: true, rewrite: (path: string) => path.replace(new RegExp(`^${prefix}`), '') };
  return proxy;
}

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
  },
  renderer: defineViteConfig(({ mode }: any): any => {
    const env = loadEnv(mode, process.cwd());
    return {
      resolve: {
        alias: {
          '@': resolve('src/renderer/src'),
          'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
        },
      },
      plugins: [vue(), Components({ resolvers: [AntDesignVueResolver({ importStyle: false })] })],
      server: mode === 'development' ? { port: 31000, proxy: proxyParse(env.VITE_PROXY ?? '[]') } : {},
      define: {
        'process.platform': null,
        'process.version': null,
        GLOBAL_VAR: { COMMIT_ID: commitHash },
      },
    };
  }),
});
