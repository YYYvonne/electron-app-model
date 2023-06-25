/// <reference types="vite/client" />
declare var GLOBAL_VAR: any;

declare module 'keymaster';
declare module '*.vue' {
  import { App, defineComponent } from 'vue';
  const component: ReturnType<typeof defineComponent> & {
    install(app: App): void;
  };
  export default component;
}
