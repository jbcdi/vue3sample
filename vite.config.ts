import { resolve } from 'path'
import { defineConfig } from 'vite'
import vuetify from 'vite-plugin-vuetify'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import type { Resolver } from 'unplugin-auto-import/types'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports, getPascalCaseRouteName } from 'unplugin-vue-router'
import { fileURLToPath } from 'node:url'

const composableResolver: Resolver = (name: string) => {
  if (name.startsWith('use')) {
    return `@/composables/${name}`
  }
}

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    }
  },
  plugins: [
    Vue({
      include: [/\.vue$/],
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('i-') || tag === 'vue-advanced-chat' || tag === 'emoji-picker'
        }
      }
    }),
    VueRouter({
      routesFolder: './src/pages', // allowed extensions for components to be considered as pages
      // can also be a suffix: e.g. `.page.vue` will match `home.page.vue`
      // but remove it from the route path
      extensions: ['.vue'],

      // list of glob files to exclude from the routes generation
      // e.g. ['**/__*'] will exclude all files and folders starting with `__`
      // e.g. ['**/__*/**/*'] will exclude all files within folders starting with `__`
      // e.g. ['**/*.component.vue'] will exclude components ending with `.component.vue`
      exclude: [],

      // Path for the generated types. Defaults to `./typed-router.d.ts` if typescript
      // is installed. Can be disabled by passing `false`.
      dts: './typed-router.d.ts',

      // Override the name generation of routes. unplugin-vue-router exports two versions:
      // `getFileBasedRouteName()` (the default) and `getPascalCaseRouteName()`. Import any
      // of them within your `vite.config.ts` file.
      getRouteName: routeNode => getPascalCaseRouteName(routeNode),

      // Customizes the default langage for `<route>` blocks
      // json5 is just a more permissive version of json
      routeBlockLang: 'json5',

      // Change the import mode of page components. Can be 'async', 'sync', or a function with the following signature:
      // (filepath: string) => 'async' | 'sync'
      importMode: 'async'
    }),
    vuetify({ autoImport: true, styles: { configFile: 'src/theme/settings.scss' } }),
    Components({
      extensions: ['vue'],
      dirs: ['src/components'],
      deep: false
    }),
    AutoImport({
      imports: [
        'vue',
        VueRouterAutoImports,
        '@vueuse/core',
        {
          '@tauri-apps/api/app': ['getName', 'getVersion', 'getTauriVersion'],
          '@tauri-apps/api/shell': ['Command'],
          '@tauri-apps/api/notification': ['sendNotification', 'requestPermission', 'isPermissionGranted']
        }
      ],
      dirs: ['src/composables'],
      resolvers: composableResolver,
      dts: 'src/auto-imports.d.ts'
    })
  ],
  build: {
    rollupOptions: {
      output: {
        inlineDynamicImports: true
      }
    }
  },
  server: {
    fs: {
      allow: ['..']
    },
    host: true,
    port: 8476,
    strictPort: true
  }
})
