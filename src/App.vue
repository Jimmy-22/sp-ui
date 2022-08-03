<template>
  <el-container>
    <el-header>
      <el-menu
        default-active="1"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">SP UI</el-menu-item>
      </el-menu>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>入门</span>
            </template>
            <el-submenu index="1-2">
              <template slot="title">快速上手</template>
              <el-menu-item index="1-2-1">安装</el-menu-item>
              <el-menu-item index="1-2-2">Hello World</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <router-link to="/input">
              <el-menu-item index="2-1">Input组件</el-menu-item>
            </router-link>
            <router-link to="/button">
              <el-menu-item index="2-2">Button组件</el-menu-item>
            </router-link>
            <router-link to="/collapse">
              <el-menu-item index="2-3">Collapse组件</el-menu-item>
            </router-link>
            <router-link to="/pager">
              <el-menu-item index="2-4">Pager组件</el-menu-item>
            </router-link>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script></script>
<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  padding: 0 !important;
}

.el-aside {
  /* background-color: #d3dce6; */
  color: #333;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}

body > .el-container {
  height: 100vh;
}
</style>
