<template>
  <div class="type">
    <div class="type__title">Something is happening, hopefully it's good.</div>
    <div class="type__title --desktop">Glenn Weatherson is a front end developer with a mountain bike problem, <button class="type__continue">press enter to continue</button></div>

    <div class="type__title --mobile">Glenn Weatherson is a front end developer</div>
    <div class="type__title --mobile">with a mountain bike problem,</div>
    <div class="type__title --mobile"><button class="type__continue">tap to continue</button></div>
  </div>
</template>

<script>
export default {
  name: 'Type',
}
</script>

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
      bottom: 7rem;
      @media (min-width: 768px) {
        bottom: 3.6rem;
      }
    }
    &:nth-of-type(2) {
      animation-delay: 9s;
      &:after {
        content: "";
        animation: dots .8s infinite;
        letter-spacing: -.3rem;
      }
    }

    &:nth-of-type(3) {
      animation-delay: 9s;
      bottom: 5.4rem;
      @media (min-width: 768px) {
        bottom: 0;
      }
    }

    &:nth-of-type(4) {
      animation-delay: 12s;
      bottom: 3.7rem;
      @media (min-width: 768px) {
        bottom: 0;
      }
    }

    &:nth-of-type(5) {
      animation-delay: 14s;
      &:after {
        content: "";
        animation: dots .8s infinite;
        letter-spacing: -.3rem;
      }
    }
    animation: type 4s steps(50, end) 6s 1;
    animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;

    @media (min-width: 768px) {
      animation: type 10s steps(150, end) 6s 1;
      animation-fill-mode: forwards;
      -moz-animation-fill-mode: forwards;
      -webkit-animation-fill-mode: forwards;
    }

    &.\--desktop {
      display: none;
      @media (min-width: 768px) {
        display: block;
      }
    }

    &.\--mobile {
      display: block;
      @media (min-width: 768px) {
        display: none;
      }
    }
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
  to { width: 100%; }
}

@keyframes dots {
  0%{content: "";}
  33%{content: ".";}
  66%{content: "..";}
  100%{content: "...";}
}
</style>
