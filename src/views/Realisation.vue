<template>
<div class="realisation">
   <Title titre="Réalisation" />
    <section class="section is-small">
        <div class="container">
            <Gantt  titre="Organisation du travail"/>
            <Charte />
            <br>   
            <Site />
            <Application />     
        </div>         
    </section>
</div>
</template>

<script>
import Title from '../components/layout/Title.vue'
import Gantt from '../components/Gantt.vue'
import Charte from '../components/Charte.vue'
import Site from '../components/Site.vue'
import Application from '../components/Application.vue'

export default {
  name: 'Realisation',
  components: { 
      Title,
      Gantt,
      Charte,
      Site,
      Application,
  },
}
</script>

<style scoped>

</style>