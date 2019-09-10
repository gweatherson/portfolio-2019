<template>
  <div class="home">
    <Horns/>
    <Type/>
  </div>
</template>

<script>
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
  data()  {
    return {
      useEvents: false,
    }
  },
  methods: {
    setupEvents: function () {
      setTimeout(() => {
        this.$set(this, 'useEvents', true);
      }, 13000);
    }
  },
  mounted() {
    this.setupEvents();
    let checkEvents =  window.setInterval(() => {
      if(this.useEvents === true) {
        clearInterval(checkEvents);
        let type = document.querySelector('.type');
        let home = document.querySelector('.home');
        home.addEventListener('keydown', (event) => {
          if (event.keyCode === 13) {
            this.$router.replace({ path: 'about' }).catch(err => {})
          }
        });

        type.addEventListener('pointerdown', (event) => {
          this.$router.replace({ path: 'about' }).catch(err => {})
        });
      }
    }, 500);
    this.$set(this, 'useEvents', false);
  }
}
</script>
