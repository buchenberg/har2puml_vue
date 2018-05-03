<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--12-col">
      <h3>Ace Editor</h3>
      <brace
        :fontsize="'22px'"
        :theme="'monokai'"
        :mode="'javascript'"
        :codefolding="'markbegin'"
        :softwrap="'free'"
        :selectionstyle="'text'"
        :highlightline="true">
      </brace>
      </div>
  </div>
</template>

<script src='./JSONEditor.js' />

<style scoped src='./JSONEditor.css' />
