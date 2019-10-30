<template>
  <article role="main" class="contact__container">
    <div class="contact__content">
      <div class="contact__lead">Have something to say? Let's chat.</div>
      <div class="contact__email"><a href="mailto:gweatherson@gmail.com">gweatherson@gmail.com</a></div>
    </div>

    <div class="contact__elsewhere">
      <a href="https://www.linkedin.com/in/gweatherson/" aria-label="Visit my profile on LinkedIn">LinkedIn</a>
      <a href="https://github.com/gweatherson" aria-label="Visit my profile on GitHub">GitHub</a>
      <a href="https://instagram.com/blkedy" aria-label="Visit my photos and videos on Instagram">Instagram</a>
    </div>
  </article>
</template>

<script>

export default {
  name: 'contact',
  data()  {
    return {
    }
  },
  beforeCreate: function() {
    document.body.className = 'contact';
  },
  mounted() {
  }
}
</script>

<style lang="scss">
  .contact {
    position: relative;

    &__container {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 80% 20%;
      grid-template-areas: "." ".";
      height: calc(100vh - 10rem);

      @media (min-width: 768px) {
        height: 100vh;
      }
    }

    &__content {
      margin: auto;
      text-align: center;
    }

    &__lead {
      font-family: 'Bitter', serif;
      font-size: 2rem;

      @media (min-width: 768px) {
        font-size: 3rem;
      }
    }

    &__email {
      color: $blue;

      a {
        color: $blue;
      }
    }

    &__elsewhere {
      display: flex;
      justify-content: center;

      a {
        padding: 1rem;
      }
    }

  }
</style>
