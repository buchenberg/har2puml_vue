<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--6-col">
      <h2>Aces!</h2>
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
      <div class="mdl-cell mdl-cell--6-col">{{ content }}</div>
  </div>
</template>

<script src='./JSONEditor.js' />

<style scoped src='./JSONEditor.css' />
