<template>
  <div class="contact__container">
    <div class="contact__content">
      <div class="contact__lead">Have something to say? Let's chat.</div>
      <div class="contact__email"><a href="mailto:gweatherson@gmail.com">gweatherson@gmail.com</a></div>
    </div>

    <div class="contact__elsewhere">
      <a href="https://www.linkedin.com/in/gweatherson/">LinkedIn</a>
      <a href="https://github.com/gweatherson">Github</a>
      <a href="https://instagram.com/blkedy">Instagram</a>
      <a href="mailto:gweatherson@gmail.com">Email</a>
    </div>
  </div>
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
      grid-template-rows: 90% 10%;
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
      color: $red;

      a {
        color: $red;
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
