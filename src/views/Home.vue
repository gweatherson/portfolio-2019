<template>
  <article role="main" class="home">
    <Horns/>
    <Type/>
  </article>
</template>

<script>
import Horns from '@/components/Horns.vue'

export default {
  name: 'home',
  components: {
    'Horns': Horns
  },
  beforeCreate: function() {
    document.body.className = 'home';
  },
  data()  {
    return {
    }
  },
  methods: {
  },
  mounted() {
      setTimeout(() => {
        this.$router.replace({ path: 'about' }).catch(err => {})
      }, 2000);
  }
}
</script>
