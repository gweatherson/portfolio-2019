<template>
  <div id="app">
    <div class="menu">
      <router-link to="/about" class="menu__link">About</router-link>
      <router-link to="/work" class="menu__link">Work</router-link>
      <router-link to="/contact" class="menu__link">Contact</router-link>
    </div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
