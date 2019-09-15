<template>
  <div class="work-container">
    <div class="work-container__warning" v-show='toggle'>
      <div class="work-container__warning-title">Holy hell! We have a warning:</div>
      <div class="work-container__warning-description">Working with a team at an agency limits portfolio work since it would be unfair to take full credit for projects completed. I am currently working on a few projects where Dribbble designs that catch my eye are turning into code.</div>
      <button class="work-container__warning-button" @click='toggle = !toggle'>Whatever Pal.</button>
    </div>

    <div class="work-list">
      <div class="work-list__item">
        <h2 class="work-list__item-title">Project: Dribbble Inspiration</h2>
        <img class="work-list__item-image" src="../assets/images/portfolio/01.png" alt="Dribbble Inspiration screen of the home page" />
        <div class="work-list__item-links">
          <a href="https://glennweatherson.com/projects/dribbble-inspiration/" target="_blank" class="work-list__item-link">View Project</a>
          <a href="https://github.com/gweatherson/dribbble-semantics" target="_blank" class="work-list__item-link">View on Github</a>
        </div>
      </div>
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
    position: absolute;
    max-width: 50rem;
    padding: 2rem;
    border: 4px solid $blue;
    border-top: 14px solid $blue;
    background-color: $black;
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
    margin-bottom: 1rem;
  }

  &__warning-description {

  }

  &__warning-button {
    text-transform: uppercase;
    padding: 1rem 0;
    display: block;
    margin-top: 2rem;
  }

  button {
    border: none;
    background-color: transparent;
    padding: 0;
    color: $blue;
    padding: 1rem 0;
  }
}

.work-list {
  max-width: 114rem;
  width: 100%;
  margin: 0 auto;
  padding-top: 2rem;

  @media (min-width: 768px) {
    padding-top: 14rem;
  }

  &__item {
    width: 100%;
    text-align: right;
    img {
      max-width: 100%;
    }
  }

  &__item-title {
    text-transform: uppercase;
    color: $blue;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  &__item-links {
    width: 100%;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
  }

  &__item-link {
    padding: 2rem;

    &:last-of-type {
      padding-right: 0;
    }
  }
}
</style>
