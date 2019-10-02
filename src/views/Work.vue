<template>
  <article role="main" class="work-container">
    <div class="work-list">
      <div class="work-list__item">
        <h2 class="work-list__item-title"><a href="https://glennweatherson.com/projects/dribbble-inspiration/">Project: Dribbble Inspiration</a></h2>
        <a href="https://glennweatherson.com/projects/dribbble-inspiration/"><img class="work-list__item-image" src="../assets/images/portfolio/01.png" alt="Dribbble Inspiration screen of the home page" /></a>
        <div class="work-list__item-description">
          This project is based off a Dribbble design. The work isn't real, there is nothing to buy and no one to contact. This is an opportunity for me to practice proper semantic habits and code a design outside of team based agency work where full credit cannot be taken. There are so many tools, frameworks, bells &amp; whistles on the modern web and I feel that the industry has lost sight of what's most important: All humans being able to browse a site, oh and the robots too.
        </div>
        <div class="work-list__item-links">
          <a href="https://glennweatherson.com/projects/dribbble-inspiration/" class="work-list__item-link">View Project</a>
          <a href="https://github.com/gweatherson/dribbble-semantics" class="work-list__item-link">View on Github</a>
        </div>
      </div>
    </div>
  </article>
</template>

<script>

export default {
  data () {
    return {
      toggle: true,
    }
  },
  name: 'work',
  beforeCreate: function() {
    document.body.className = 'work';
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
.work-container {
}

.work-list {
  max-width: 114rem;
  margin: 0 auto;
  margin-top: 2rem;


  @media (min-width: 768px) {
    margin-top: 14rem;
    width: calc(100% - 4rem);
    padding-left: 2rem;
    padding-right: 2rem;
  }

  &__item {
    width: 100%;
    img {
      max-width: 100%;
    }
  }

  &__item-title {
    text-transform: uppercase;
    color: $blue;
    font-size: 2rem;
    margin-bottom: 1rem;

    a {
      color: $blue;
    }
  }

  &__item-image {
    margin-bottom: 2rem;

    @media (min-width: 768px) {
      margin-bottom: 4rem;
    }
  }

  &__item-description {
    max-width: 60rem;
    margin-bottom: 2rem;

    @media (min-width: 768px) {
      margin-bottom: 4rem;
    }
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
    color: $blue;

    &:link, &:visited {
      color: $blue;
    }

    &:last-of-type {
      @media (min-width: 768px) {
        padding-right: 0;
      }
    }
  }
}
</style>
