<template>
  <!-- ### $Topbar ### -->
  <div class="header navbar">
    <div class="header-container">
      <ul class="nav-left">
        <!-- <li>
          <a id="sidebar-toggle" class="sidebar-toggle" href="javascript:void(0);">
            <i class="ti ti-menu"></i>
          </a>
        </li>
        <li class="search-box">
          <a class="search-toggle no-pdd-right" href="javascript:void(0);">
            <i class="search-icon ti ti-search pdd-right-10"></i>
            <i class="search-icon-close ti ti-close pdd-right-10"></i>
          </a>
        </li>
        <li class="search-input">
          <input class="form-control" type="text" placeholder="Search...">
        </li>-->
      </ul>
      <ul class="nav-right">
        <div class="language-switch">
          <el-dropdown @command="goToPage" trigger="click">
            <el-button class="icon-button outline-none" icon="el-icon-circle-plus-outline">
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-for="item in addFast"
                :key="item.value"
                :command="item.value"
                :divided="item.divided"
                :disabled="item.disabled"
                :icon="!item.no_icon ? 'el-icon-plus' : ''"
              >{{item.label | t}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>

        <div class="language-switch">
          <el-dropdown @command="switchLanguage" trigger="click">
            <el-badge :value="lang.toUpperCase()">
              <el-button
                class="icon-button outline-none"
                icon="el-icon-basketball"
                :underline="false"
              ></el-button>
            </el-badge>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="en">{{'English' | t}}</el-dropdown-item>
              <el-dropdown-item command="vi">{{'Vietnamese' | t}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>

        <el-dropdown trigger="click" v-if="user">
          <div class="nav-avatar">
            <div class="peer mR-10">
              <img :src="image_url" alt="Avatar" v-if="has_avatar" />
              <div v-else class="avatar-letter">
                <span class="avatar-character">{{ first_letter }}</span>
              </div>
            </div>

            <div class="peer">
              <span class="fsz-sm c-grey-900">{{ name }}</span>
              <i class="el-icon-arrow-down"></i>
            </div>
          </div>

          <el-dropdown-menu slot="dropdown" class="td-none">
            <el-dropdown-item>
              <a href class="c-grey-700">
                <i class="el-icon-setting mR-10"></i>
                <span>{{'Settings' | t}}</span>
              </a>
            </el-dropdown-item>
            <router-link to="/profile">
              <el-dropdown-item>
                <i class="el-icon-user mR-10"></i>
                <span>{{'Profile' | t}}</span>
              </el-dropdown-item>
            </router-link>
            <el-dropdown-item>
              <a href class="c-grey-700">
                <i class="el-icon-message mR-10"></i>
                <span>{{'Messages' | t}}</span>
              </a>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <a class="c-grey-700" @click="logout">
                <i class="el-icon-lock mR-10"></i>
                <span>{{'Logout' | t}}</span>
              </a>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" src="./Navbar.ts"></script>

<style lang="scss" src="./Navbar.scss" scoped>
</style>
