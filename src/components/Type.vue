<template>
  <div class="type">
    <div class="type__title">Something is happening, hopefully it's good.</div>
    <div class="type__title">Glenn Weatherson is a front end developer with a mountain bike problem, <button class="type__continue">press enter to continue</button></div>
  </div>
</template>

<script>
export default {
  name: 'Type',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.type {
  font-family: 'Space Mono', monospace;
  &__title {
    position: fixed;
    bottom: 2rem;
    left: 2rem;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    width: 0;
    font-size: 1.1rem;
    &:first-of-type {
      bottom: 3.6rem;
    }
    &:last-of-type {
      animation-delay: 9s;
      &:after {
        content: "";
        animation: dots .8s infinite;
        letter-spacing: -.3rem;
      }
    }
    animation: type 4s steps(60, end) 6s 1;
    animation-fill-mode: forwards;
  }
  &__continue {
    font-family: 'Space Mono', monospace;
    border: none;
    background: none;
    text-transform: uppercase;
    padding: 0;
  }
}

@keyframes type {
  from { width: 0; }
  to { width: 60em; }
}

@keyframes dots {
  0%{content: "";}
  33%{content: ".";}
  66%{content: "..";}
  100%{content: "...";}
}
</style>
