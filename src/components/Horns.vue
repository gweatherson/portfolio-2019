<template>
  <div class="horns" v-on:click="type"></div>
</template>

<script>
export default {
  name: 'Horns',
  methods: {
    type: function(event) {
      this.loaded = true;
      setTimeout(() => {
          console.log('yella');
          this.loaded = false;
      }, 2000);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.horns {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50% -50%);
  letter-spacing: -.25rem;
  animation: fadeOut .4s ease-in-out 4s 1 forwards;
  &:after {
    content: "";
    animation: horns 1s infinite;
  }
}
@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}

@keyframes horns {
  0% { content: ",,,,"; }
  25% { content: "|,,|"; }
  50% { content: "|,,|"; }
  75% { content: "|,,|"; }
  100% { content: ",,,,"; }
}
</style>
