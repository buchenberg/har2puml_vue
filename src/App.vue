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
        <!-- Accent-colored raised button -->
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
        Upload JSON
        </button>
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
require('material-design-lite')
export default {
  name: 'App',
  data () {
    return {
      title: 'JSON to UML'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');
.mdl-layout .mdl-layout__drawer-button {
  display: none;
}
.mdl-layout__header-row {
  padding-left: 8px
}
</style>
