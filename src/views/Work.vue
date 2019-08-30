<template>
  <div class="work">

    <div class="work__warning" v-show='toggle'>
      <div class="work__warning-title">Holy hell! We have a warning:</div>
      <div class="work__warning-description">Working at an agency limits portfolio work since it would be unfair to take full credit for projects completed. I am currently working on a few projects where Dribbble designs that catch my eye are turning into code.</div>
      <button class="work__warning-button" @click='toggle = !toggle'>Whatever Pal</button>
    </div>


  </div>
</template>

<script>

export default {
  name: 'work',
  data () {
    return {
      toggle: true
    }
  },
  beforeCreate: function() {
    document.body.className = 'work';
  }
}
</script>

<style lang="scss" scoped>
$black: #303841;
$grey: #3a4750;
$red: #d72323;
$white: #eee;
$blue: #23d7d7;

.work {
  &__warning {
    max-width: 50rem;
    padding: 4rem 4rem 3rem 4rem;
    // border: 4px solid $blue;
    // border-top: 14px solid $blue;
  }

  &__warning-title {
    font-family: 'Space Mono', monospace;
    text-transform: uppercase;
    // color: $blue;
  }

  &__warning-description {

  }

  &__warning-button {
    text-transform: uppercase;
    padding: 1rem 0;
    display: block;
  }

  button {
    border: none;
    background-color: transparent;
    padding: 0;
    // color: $blue;
    padding: 1rem 0;
  }
}
</style>
