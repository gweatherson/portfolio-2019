<template>
  <div id="app">
    <header>
      <nav class="menu">
        <router-link to="/about" class="menu__link">About</router-link>
        <router-link to="/contact" class="menu__link">Contact</router-link>
      </nav>
    </header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
