<template>
  <div class="home">
    <Horns/>
    <Type/>
  </div>
</template>

<script>
// @ is an alias to /src
import router from 'vue-router'
import Horns from '@/components/Horns.vue'
import Type from '@/components/Type.vue'


export default {
  name: 'home',
  components: {
    'Horns': Horns,
    'Type': Type
  },
  beforeCreate: function() {
    document.body.className = 'home';
  },
  mounted() {
    window.addEventListener('keyup', (event) => {
      if (event.keyCode === 13) {
        this.$router.push('about');
      }
    });
  }
}
</script>

<style lang="scss">

</style>
