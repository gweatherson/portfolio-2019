<template>
  <div class="horns" v-on:click="type"></div>
</template>

<script>
export default {
  name: 'Horns',
}
</script>

<style lang="scss" scoped>
.horns {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  letter-spacing: -.25rem;
  animation: fadeOut .4s ease-in-out 4s 1 forwards;
  font-family: 'Space Mono', monospace;
  font-size: 1.1rem;
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
