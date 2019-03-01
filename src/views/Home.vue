<template>
  <section id="home">
    <Hero />
    
  </section>
</template>

<script>
// @ is an alias to /src
import Hero from '../components/hero'

export default {
  name: 'home',
  data: () => {
    return{
      products: []
    }
  },
  components: {
    Hero
  },
   methods: {
    
  }
};
</script>
