<template>
  <div>
    <div v-if="is_loading" class="loading-bar"/>
    <el-row class="ps">
      <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16">
        <div class="h-100vh background d-n@sm- d-f">
          <div class="rounded-circle logo">
            <img src="assets/img/logo.png" alt="Logo">
          </div>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8" class="col-12 col-md-4 min-w scrollable">
        <div class="h-100vh layout">
          <h4 class="title fw-300">
            <img src="assets/img/logo.png" alt="Logo">
            <span style="margin: auto 15px">Bamboo Vision</span>
          </h4>
          <el-card class="shadow-none">
            <slot/>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" src="./Background.ts"></script>

<style lang="scss" src="./Background.scss" scoped></style>