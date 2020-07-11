<template>
  <!-- #Left Sidebar ==================== -->
  <div class="sidebar">
    <div class="sidebar-inner">
      <!-- ### $Sidebar Header ### -->
      <div class="sidebar-logo">
        <div class="peers ai-c fxw-nw">
          <div class="peer peer-greed">
            <router-link to="/">
              <a class="sidebar-link td-n">
                <div class="peers ai-c fxw-nw">
                  <div class="peer">
                    <div class="logo">
                      <img src="assets/img/logo.png" alt />
                    </div>
                  </div>
                  <div class="peer peer-greed">
                    <h5 class="lh-1 mB-0 logo-text">{{ 'BB Vision' | t }}</h5>
                  </div>
                </div>
              </a>
            </router-link>
          </div>
          <div class="peer">
            <div class="mobile-toggle sidebar-toggle">
              <a href class="td-n">
                <i class="ti ti-arrow-circle-left"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="sidebar-menu scrollable pos-r">
        <el-menu
          :default-active="$route.name"
          class="sidebar-text"
          :unique-opened="true"
          :router="true"
        >
          <el-menu-item index="warehouses" :route="{ name: 'warehouses' }">
            <i class="el-icon-s-home primary-color"></i>
            <span>{{ 'Warehouses' | t }}</span>
          </el-menu-item>
          <el-submenu index="reports">
            <template slot="title">
              <i class="el-icon-s-data c-blue-500"></i>
              <span>{{ 'Reports' | t }}</span>
            </template>
            <el-menu-item index="reportReceives" :route="{ name: 'reportReceives' }">{{
              'Goods receive cost' | t
            }}</el-menu-item>
            <el-menu-item index="revenueReport" :route="{ name: 'revenueReport' }">{{
              'Revenue' | t
            }}</el-menu-item>
            <!-- <el-menu-item
              index="comboProduct"
              :route="{ name: 'comboProduct' }"
            >{{ 'Product Combo' | t }}</el-menu-item>
            <el-menu-item
              index="materialProduct"
              :route="{ name: 'materialProduct' }"
            >Quản lý nguyên liệu</el-menu-item> -->
          </el-submenu>
          <el-submenu index="product">
            <template slot="title">
              <i class="el-icon-box c-brown-500"></i>
              <span>{{ 'Product Management' | t }}</span>
            </template>
            <el-menu-item index="productList" :route="{ name: 'productList' }">{{
              'Product List' | t
            }}</el-menu-item>
            <el-menu-item index="createProduct" :route="{ name: 'createProduct' }">{{
              'Create Product' | t
            }}</el-menu-item>
            <el-menu-item index="comboProduct" :route="{ name: 'comboProduct' }">{{
              'Product Combo' | t
            }}</el-menu-item>
            <!-- <el-menu-item
              index="materialProduct"
              :route="{ name: 'materialProduct' }"
            >Quản lý nguyên liệu</el-menu-item>-->
          </el-submenu>
          <el-submenu index="warehouse">
            <template slot="title">
              <i class="el-icon-s-order c-deep-purple-500"></i>
              <span>{{ 'Warehouse Management' | t }}</span>
            </template>
            <el-menu-item index="inventory" :route="{ name: 'inventory' }">{{
              'Inventory Report' | t
            }}</el-menu-item>
            <el-menu-item index="importManagement" :route="{ name: 'importManagement' }">{{
              'Goods Received Note' | t
            }}</el-menu-item>
            <el-menu-item index="exports" :route="{ name: 'exports' }">{{
              'Goods Delivery Note' | t
            }}</el-menu-item>
            <el-menu-item index="exchanges" :route="{ name: 'exchanges' }">{{
              'Warehouse Transfer Report' | t
            }}</el-menu-item>
          </el-submenu>

          <el-submenu index="order">
            <template slot="title">
              <i class="el-icon-sell c-deep-orange-500"></i>
              <span>{{ 'Sale Management' | t }}</span>
            </template>
            <el-menu-item index="createOrder" :route="{ name: 'createOrder' }">{{
              'Create Order' | t
            }}</el-menu-item>
            <el-menu-item index="orderManagement" :route="{ name: 'orderManagement' }">{{
              'Order Management' | t
            }}</el-menu-item>
            <el-menu-item index="orderShip" :route="{ name: 'orderShip' }">{{
              'Waybill Management' | t
            }}</el-menu-item>
            <el-menu-item index="developing" :route="{ name: 'developing' }">{{
              'Promotion Management' | t
            }}</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-s-custom c-light-blue-500"></i>
              <span>{{ 'Customer Management' | t }}</span>
            </template>
            <el-menu-item index="customers" :route="{ name: 'customers' }">{{
              'Customer List' | t
            }}</el-menu-item>
            <el-menu-item index="customerstags" :route="{ name: 'customerstags' }">{{
              'Tag List' | t
            }}</el-menu-item>
          </el-submenu>
          <el-menu-item index="suppliers" :route="{ name: 'suppliers' }">
            <i class="el-icon-office-building c-indigo-500"></i>
            <span>{{ 'Supplier Management' | t }}</span>
          </el-menu-item>
          <el-menu-item index="transporters" :route="{ name: 'transporters' }">
            <i class="el-icon-truck c-pink-500"></i>
            <span>{{ 'Transporter Management' | t }}</span>
          </el-menu-item>
          <el-submenu index="staff">
            <template slot="title">
              <i class="el-icon-user c-red-500"></i>
              <span>{{ 'Employee Management' | t }}</span>
            </template>
            <el-menu-item index="users" :route="{ name: 'users' }">
              <span>{{ 'Employee List' | t }}</span>
            </el-menu-item>
            <el-menu-item index="permissions" :route="{ name: 'permissions' }">{{
              'Privilege' | t
            }}</el-menu-item>
          </el-submenu>
          <el-menu-item index="contract" :route="{ name: 'contract' }">
            <i class="el-icon-document c-purple-500"></i>
            <span>{{ 'Contract Management' | t }}</span>
          </el-menu-item>
          <el-menu-item index="config" :route="{ name: 'config' }">
            <i class="el-icon-setting c-teal-500"></i>
            <span>{{ 'Settings' | t }}</span>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Sidebar.ts"></script>

<style lang="scss" src="./Sidebar.scss" scoped></style>
