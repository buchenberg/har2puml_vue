<template>
  <div class="mdl-grid" v-if="har">
      <div class="mdl-cell mdl-cell--12-col">
        <div class="ace-card-wide mdl-card mdl-shadow--2dp">
          <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">{{ title }}</h2>
          </div>
          <div class="ace-card-text mdl-card__supporting-text">
            <ul class="demo-list-item mdl-list">
              <li class="mdl-list__item" v-for="(entry, index) in har.log.entries" :key="index">
                <span class="mdl-list__item-primary-content">
                {{index}} {{ entry.request.method }} - {{ path(entry.request.url) }}
                </span>
                <span class="mdl-list__item-secondary-action">
                  <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-1">
                    <input type="checkbox" id="list-checkbox-1" class="mdl-checkbox__input" checked />
                  </label>
                </span>
              </li>
            </ul>
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

<script src='./HarViewer.js' />

<style scoped src='./HarViewer.css' />
