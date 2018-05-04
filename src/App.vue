<template>
  <!-- Always shows a header, even in smaller screens. -->
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <!-- Title -->
        <span class="mdl-layout-title">{{this.title}}</span>
        <!-- Add spacer, to align navigation to the right -->
        <div class="mdl-layout-spacer"></div>
        <!-- Navigation. We hide it in small screens. -->
        <nav class="mdl-navigation mdl-layout--large-screen-only">
          <HarUploader/>
        </nav>
      </div>
    </header>
    <main class="mdl-layout__content">
      <div class="page-content">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import HarUploader from '@/components/HarUploader/HarUploader.vue'
require('material-design-lite')
export default {
  name: 'App',
  components: {
    HarUploader
  },
  data () {
    return {
      title: 'HAR to UML'
    }
  }
}
</script>

<style>
  @import "../node_modules/material-design-lite/dist/material.min.css";

  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

  .mdl-layout .mdl-layout__drawer-button {
    display: none;
  }

  .mdl-layout__header-row {
    padding-left: 8px
  }
</style>
