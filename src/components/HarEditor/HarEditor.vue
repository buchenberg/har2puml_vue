<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--12-col">
      <div class="demo-card-wide mdl-card mdl-shadow--2dp">
          <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">{{ title }}</h2>
          </div>
          <div class="ace-card-text mdl-card__supporting-text">
            <div id="har-editor"/>
          </div>
          <div class="mdl-card__actions mdl-card--border">
            <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              Transform
            </a>
          </div>
        </div>
    </div>
  </div>
</template>

<script src='./HarEditor.js' />

<style scoped src='./HarEditor.css' />
