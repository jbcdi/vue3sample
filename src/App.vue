<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator'

@Component({ components: {} })
class App extends Vue {
  mounted(): void {
  }

  setupBuiltinDone = false
  isTauri = false
}
export default toNative(App)
</script>
<template>
  <v-app id="xabtauri">
    <v-system-bar v-if="false">
      <v-spacer></v-spacer>
      <v-icon>mdi-square</v-icon>
      <v-icon>mdi-circle</v-icon>
      <v-icon>mdi-close</v-icon>
    </v-system-bar>
    <v-app-bar id="mainbar" height="47" class="px-3" color="-darken-4" density="compact">
      <v-app-bar-title>
        <h2 style="font-size: 26px" class="font-weight-thin">sampletext</h2>
      </v-app-bar-title>
      <v-spacer />
      <v-btn tonal to="/" class="text-none mr-1" link>Home</v-btn>
      <v-menu transition="slide-x-transition">
        <template v-slot:activator="{ props }">
          <v-btn color="primary" class="text-none" v-bind="props">apps</v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>
              <v-btn tonal to="/aiCoreChat" class="text-none" link>aiCore_chat</v-btn>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu transition="slide-x-transition">
        <template v-slot:activator="{ props }">
          <v-btn color="primary" class="text-none" v-bind="props">tools</v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>
              <v-btn tonal to="/httpKd" class="text-none" link>httpKd</v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu transition="slide-x-transition">
        <template v-slot:activator="{ props }">
          <v-btn color="primary" class="text-none" v-bind="props">setup</v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>
              <v-btn tonal to="/setupLogins" class="text-none" link>logins</v-btn>
            </v-list-item-title>
          </v-list-item>
          <v-list-item v-if="isTauri">
            <v-list-item-title>
              <v-btn tonal to="/TauriXabSetup" class="text-none" link>tauri.xAB</v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main><router-view /></v-main>
  </v-app>
</template>

<style lang="scss">
html {
  -webkit-tap-highlight-color: transparent;
  scroll-behavior: smooth;
}

img {
  -webkit-user-drag: none;
}

#mainbar {
  background: conic-gradient(from 90deg at 50% 0%, #111, 50%, #222, #111);
}
</style>
