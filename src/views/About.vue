<template>
  <article role="main" class="about">
    <div class="about__column">
      <div class="about__lead">Oh hey! People call me Glenn.</div>
      <p>
        I'm a person living in the high desert of Reno, Nevada. Don't be fooled, we're surrounded by pine trees, winding rivers, and snow melt lakes. I work at
        <a
          href="https://970design.com"
          target="_blank"
        >970 Design</a>.
      </p>

      <div class="about__lead">What do you really do?</div>
      <p>Web development has struck interest in me for many years now. Starting back in 2006 with the freelance scramble working with a wide variety of clients, continuing to work remotely for an agency on major brands, and working in office at multiple agencies.</p>

      <p>My passion on the web lies in HTML &amp; CSS while pushing back on conformity. Writing SASS using BEM is my sweet spot. Being challenged on new design ideas that translate into a place people get to visit keeps work fascinating and fulfilling.</p>

      <div class="about__lead">Extracurricular Internet</div>
      <p>
        Photo blog:
        <a
          href="https://glennscrap.com"
          aria-label="Go to my photoblog, Glenn's crap dot com"
        >glennscrap.com</a>
      </p>
    </div>
    <div class="about__column">
      <picture class="about__image">
        <source srcset="../assets/images/me.webp" type="image/webp" />
        <source srcset="../assets/images/me.jpg" type="image/jpeg" />
        <img src="../assets/images/me.jpg" alt="Photo of me in Downieville, California." />
      </picture>
    </div>
  </article>
</template>

<script>
export default {
  name: "about",
  data() {
    return {};
  },
  beforeCreate: function() {
    document.body.className = "about";
  }
};
</script>

<style lang="scss" scoped>
.about {
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    padding: 2rem;
  }

  &__column {
    max-width: 38rem;
    width: 100%;
    padding-left: 0;
    padding-right: 0;
    padding-top: 2rem;
    padding-bottom: 0;

    &:last-of-type {
      padding-top: 0;
    }

    @media (min-width: 768px) {
      padding-left: 12rem;
      padding-right: 12rem;
      padding-top: 8rem;
      padding-bottom: 8rem;

      &:last-of-type {
        padding-top: 8rem;
      }
    }

    &:first-of-type {
      @media (min-width: 768px) {
        border-right: 1px solid #d5d5d5;
      }
    }
  }
  &__lead {
    font-family: "Space Mono", monospace;
    text-transform: uppercase;
    color: $red;

    @media (min-width: 768px) {
      margin-top: 4rem;
    }
  }
  &__title {
    font-size: 34px;
  }
  &__image {
    max-width: 100%;
    height: auto;
    display: block;

    img {
      width: 100%;
      height: auto;
    }

    @media (min-width: 768px) {
      padding-top: 20%;
    }
  }
}
</style>
