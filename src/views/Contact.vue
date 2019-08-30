<template>
  <div class="contact__container">

    <div class="contact__content">
      <div class="contact__lead">Have something to get off your chest? Let's chat.</div>
      <div class="contact__email">gweatherson@gmail.com</div>
    </div>

<!--     Elsewhere
    LinkedIn
    Github
    Instagram
    Email -->
  </div>
</template>

<script>

export default {
  name: 'contact',
  beforeCreate: function() {
    document.body.className = 'contact';
  }
}
</script>

<style lang="scss">
  $black: #303841;
  $grey: #3a4750;
  $red: #d72323;
  $white: #eee;
  $blue: #23d7d7;

  .contact {
    position: relative;

    &__container {
      display: grid;
      height: 100vh;
    }

    &__content {
      margin: auto;
      text-align: center;
    }

    &__lead {
      font-family: 'Bitter', serif;
      font-size: 3rem;
    }

    &__email {
      font-family: 'Space Mono', monospace;
      text-transform: uppercase;
      // color: $red;
    }

  }
</style>
