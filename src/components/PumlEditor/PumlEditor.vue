<template>
  <div v-if="har">
    <div class="mdl-grid" v-if="puml">
      <div class="mdl-cell mdl-cell--12-col">
        <div class="demo-card-wide mdl-card mdl-shadow--2dp">
          <div class="mdl-card__title">
            <h2 class="ace-card-text mdl-card__title-text">PUML</h2>
          </div>
          <div class="mdl-card__supporting-text">
            <pre>{{puml}}</pre>
          </div>
        </div>
      </div>
    </div>
    <div class="mdl-grid" v-if="puml_url">
      <div class="mdl-cell mdl-cell--12-col">
        <div class="demo-card-wide mdl-card mdl-shadow--2dp">
          <div class="mdl-card__title">
            <h2 class="ace-card-text mdl-card__title-text">UML</h2>
          </div>
          <div class="mdl-card__supporting-text">
            <img :src="puml_url" alt="puml preview" width="100%" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src='./PumlEditor.js' />

<style scoped src='./PumlEditor.css' />
