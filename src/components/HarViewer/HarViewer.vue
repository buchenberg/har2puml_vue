<template>
  <div class="mdl-grid" v-if="har">
      <div class="mdl-cell mdl-cell--12-col">
        <h3>
          {{ title }}
        </h3>
        <h4>
          Log version {{ har.log.version || 'nope' }}
        </h4>
        <h5>Entries</h5>
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
  </div>
</template>

<script src='./HarViewer.js' />

<style scoped src='./HarViewer.css' />
