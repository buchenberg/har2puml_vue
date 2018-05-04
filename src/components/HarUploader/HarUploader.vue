<template>
<div id="har-uploader">
<!--UPLOAD-->
<form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
    <label class="input-custom-file mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
        Upload HAR
        <input type="file"
                :name="uploadFieldName"
                :disabled="isSaving"
                @change="handleFiles($event.target.files)"
                accept=".har,.json">
    </label>
</form>
</div>
</template>

<script src='./HarUploader.js' />

<style scoped src='./HarUploader.css' />
