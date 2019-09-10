<template>
  <div class="work-container">
    <div class="work-container__warning" v-show='toggle'>
      <div class="work-container__warning-title">Holy hell! We have a warning:</div>
      <div class="work-container__warning-description">Working with a team at an agency limits portfolio work since it would be unfair to take full credit for projects completed. I am currently working on a few projects where Dribbble designs that catch my eye are turning into code.</div>
      <button class="work-container__warning-button" @click='toggle = !toggle'>Whatever Pal.</button>
    </div>

    <div class="notice">
      Nothing to see here, yet.
    </div>
  </div>
</template>

<script>

export default {
  name: 'work',
  data () {
    return {
      toggle: true,
    }
  },
  beforeCreate: function() {
    document.body.className = 'work';
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
.work-container {
  &__warning {
    max-width: 50rem;
    padding: 2rem;
    border: 4px solid $blue;
    border-top: 14px solid $blue;
    margin-top: 2.8rem;
    margin-left: 0;

    @media (min-width: 768px) {
      padding: 4rem 4rem 3rem 4rem;
      margin-top: 2rem;
      margin-left: 2rem;
    }
  }

  &__warning-title {
    font-family: 'Space Mono', monospace;
    text-transform: uppercase;
    color: $blue;
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
    color: $blue;
    padding: 1rem 0;
  }

  .notice {
    opacity: .6;
    text-align: center;
    font-family: 'Space Mono', monospace;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -70%);

    @media (min-width: 768px) {
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &:after {
      position: absolute;
      animation: sadface 2s infinite;
      transform: rotate(90deg);
      content: "";
      top: 5.5rem;
      left: 0;
      right: 0;

      @media (min-width: 768px) {
        top: 2.5rem;
      }
    }

    @keyframes sadface {
      0% { content: ":|"; }
      25% { content: ":("; }
      50% { content: ":|"; }
      75% { content: ":("; }
      100% { content: ":|"; }
    }
  }

}
</style>
