<template>
<div class="probleme">
    <Title titre="Problèmes rencontrés" />
    <section class="section is-small">
        <div class="container">
            <div class="columns is-mobile is-centered">
                <div class="column is-three-fifths box">
                      <ul>
                          <li>Un temps imparti, trop court pour mener à bien le projet de PicBlind.</li> <br>
                          <li>Un projet qui s'est complexifié avec des compétences manquantes en IA (Intelligence Artificielle)</li> <br>
                          <li>La mise en place sur l'application plus chronophage que prévue.</li> <br>
                          <li>Un éventail conséquent de sources scientifiques pour la mise en musique de la couleur.</li> <br>
                          <li>Dernier problème tardivement décelé : place du pixel colorisé par rapport à l'ensemble de l'oeuvre.</li>
                      </ul>
                </div>
            </div>            
        </div>            
    </section>
</div>

</template>

<script>

import Title from '../components/layout/Title.vue'

export default {
  name: 'Probleme',
  components:{
      Title,
  }
  }
</script>