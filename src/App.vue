<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/work">Work</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Space+Mono&display=swap');

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

#nav {
  display: none;
}

$containerWidth: 117rem;

$black: #1e2022;
$grey: #52616b;
$lightblue: #c9d6df;
$white: #f0f5f9;

$textColor: $lightblue;
$fontFamilyText: 'Space Mono', monospace;

html {
  font-size: 10px;
}

body {
  font-size: 1.2rem;
  color: $textColor;
  background-color: $black;
  margin: 0;
  font-family: $fontFamilyText;
  padding: 20px;
}

h1, h2, h3, h4, h5 {
  margin: 0;
}

.container {
  max-width: $containerWidth;
  margin: auto;
  width: 100%;
}
</style>
