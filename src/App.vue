<template>
  <div id="app">
    <div class="menu">
      <router-link to="/about" class="menu__link">About</router-link>
      <router-link to="/work" class="menu__link">Work</router-link>
      <router-link to="/contact" class="menu__link">Contact</router-link>
    </div>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
@import url('assets/scss/reset.scss');
@import url('https://fonts.googleapis.com/css?family=Space+Mono&display=swap');
@import url('https://fonts.googleapis.com/css?family=Bitter&display=swap');

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
  opacity: .1;
}

#app {
  height: 100%;
}

$containerWidth: 117rem;

$black: #303841;
$grey: #3a4750;
$red: #d72323;
$white: #eee;
$blue: #23d7d7;

html {
  font-size: 10px;
}

body {
  font-size: 1.4rem;
  line-height: 1.6;
  // color: $white;
  font-family: 'Bitter', serif;
  // padding: 2rem;
  height: 100%;

  &.home {
    // background-color: $black;
  }

  &.about {
    // background-color: $white;
  }

  &.work {
    // background-color: $red;
  }

  &.contact {
    // background-color: $black;
  }
}

p {

  margin-bottom: 2.5rem;
}

a {
  // color: $red;
  text-decoration: none;
}

h1, h2, h3, h4, h5 {
  margin: 0;
}

.container {
  max-width: $containerWidth;
  margin: auto;
  width: 100%;
}

.menu {
  position: absolute;
  top: 2rem;
  right: 2rem;

  &__link {
    padding: 2rem;
    text-transform: uppercase;
  }
}
</style>
