<template>
  <div class="type">
    <div class="type__title">Something is happening.. hopefully it's good</div>
    <div class="type__title">Glenn Weatherson is a front end developer with a mountain bike problem</div>
    <button class="type__continue">Press enter to continue</button>
  </div>
</template>

<script>
export default {
  name: 'Type',
  methods: {


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.type {
  &__title {
    position: fixed;
    bottom: 20px;
    left: 20px;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    width: 0;
    &:first-of-type {
      bottom: 40px;
    }

    &:last-of-type {
      animation-delay: 9s;
    }

    animation: type 4s steps(60, end) 6s 1;
    animation-fill-mode: forwards;

    &:after {
      content: "";
      animation: dots .8s infinite;
      letter-spacing: -.3rem;
    }
  }
}

@keyframes type {
  from { width: 0; }
  to { width: 53em; }
}

@keyframes dots {
  0%{content: "";}
  33%{content: ".";}
  66%{content: "..";}
  100%{content: "...";}
}
</style>
