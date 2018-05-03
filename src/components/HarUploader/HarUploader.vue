<template>
  <div id="har-uploader">
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--12-col">
        <div class="ace-card-wide mdl-card mdl-shadow--2dp">
          <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">{{ title }}</h2>
          </div>
          <div class="ace-card-text mdl-card__supporting-text">
            <!--UPLOAD-->
            <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
                <div class="dropbox">
                    <input
                        type="file"
                        :name="uploadFieldName"
                        :disabled="isSaving"
                        @change="handleFiles($event.target.files)"
                        accept=".har,.json"
                        class="input-file">
                        <p v-if="isInitial">
                        Drag your HAR file here to begin<br> or click to browse
                        </p>
                        <p v-if="isSaving">
                        Uploading file...
                        </p>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="container">

  </div>
  </div>
</template>

<script src='./HarUploader.js' />

<style scoped src='./HarUploader.css' />
