<template>
  <div class="mdl-grid" v-if="har">
    <div class="mdl-cell mdl-cell--12-col">
      <h3>{{title}}</h3>
      <div id="puml-editor"/>
      </div>
  </div>
</template>

<script src='./PumlEditor.js' />

<style scoped src='./PumlEditor.css' />
