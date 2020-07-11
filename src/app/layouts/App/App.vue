<template>
  <div>
    <div v-if="is_loading" class="loading-bar"/>
    <sidebar/>

    <div class="page-container">
      <navbar/>

      <main class="main-content bgc-grey-100">
        <div class="p-40">
          <router-view/>
        </div>
      </main>

      <footer>
        <span>Copyright © 2020, All rights reserved.</span>
      </footer>
    </div>
  </div>
</template>

<script lang="ts" src="./App.ts"></script>

<style lang="scss" src="./App.scss" scoped>
</style>
