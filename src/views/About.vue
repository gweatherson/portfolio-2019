<template>
  <div class="about">

    <div class="about__column">
      <div class="about__lead">Oh hey! People call me</div>
      <div class="about__title">Glenn Weatherson</div>
      <p>I'm a person living in the high desert of Reno, Nevada. Don't be fooled, we're surrounded by pine trees, winding rivers, and snow melt lakes. I work at <a href="https://noblestudios.com">Noble Studios</a>.</p>

      <div class="about__lead">What do you really do?</div>
      <p>Web development has struck interest in me for many years now. Starting back in 2006 with the freelance scramble working with a wide variety of clients, continuing to work remotely for an agency on major brands, and working in office at multiple agencies.</p>

      <p>My passion on the web lies in HTML & CSS while pushing back on conformity. Writing SASS using BEM is my sweet spot. Being challenged on new design ideas that translate into a place people get to visit keeps work fascinating and fulfilling.</p>
    </div>
    <div class="about__column">
      <img src="https://picsum.photos/id/237/700/700" class="about__image">
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  beforeCreate: function() {
    document.body.className = 'about';
  }
}
</script>

<style lang="scss" scoped>
$black: #303841;
$grey: #3a4750;
$red: #d72323;
$white: #eee;
$blue: #23d7d7;

.about {
  display: flex;
  justify-content: center;
  padding: 2rem;
  // color: $black;
  &__column {
    max-width: 38rem;
    padding-left: 12rem;
    padding-right: 12rem;
    padding-top: 8rem;
    padding-bottom: 8rem;

    &:first-of-type {
      border-right: 1px solid #d5d5d5;
    }
  }
  &__lead {
    font-family: 'Space Mono', monospace;
    text-transform: uppercase;
    margin-top: 4rem;
    // color: $red;
  }
  &__title {
    font-size: 34px;
  }
  &__image {
    max-width: 100%;
    height: auto;
    clip-path: polygon(0 0, 80% 0%, 100% 20%, 100% 100%, 80% 100%, 20% 100%, 0 100%, 0% 20%);
    padding-top: 20%;
    opacity: 0;
  }
}
</style>
