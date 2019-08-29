<template>
  <div class="home">
    <Horns/>
    <Type/>
  </div>
</template>

<script>
// @ is an alias to /src
import Horns from '@/components/Horns.vue'
import Type from '@/components/Type.vue'

export default {
  name: 'home',
  components: {
    'Horns': Horns,
    'Type': Type
  }
}
</script>

<style lang="scss">

</style>
