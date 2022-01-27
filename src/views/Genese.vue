<template>
<div class="genese">
  <Title titre="Genèse du projet" />
  <section class="section is-small">
    <div class="container">
        <div class="columns is-mobile is-centered">
          <div class="column is-three-fifths">
                <ul>
                    <li>L'idée de départ : créer une oeuvre à partir d'une musique</li>
                    <li>Oeuvres déjà peintes par Melissa S.McCracken <i>"L'audition colorée"</i></li>
                </ul>
                  <br><br>
                <article class="media columns is-mobile is-centered is-vcentered">
                  <div class="media-right column ">
                      <figure class="image is-2by1">
                          <img src="../assets/img/Figure-2.png" alt="image de l'oeuvre musicale de J.S Bach">
                      </figure>
                  </div>
                  <div class="media-content column">
                      <p>
                          Musique de J.S. Bach <i>"Cello suite n°1"</i>
                      </p>
                  </div>
                </article>

                <article class="media columns is-mobile is-centered is-vcentered">
                  <div class="media-right column ">
                      <figure class="image is-2by1">
                          <img src="../assets/img/Figure-3.png" alt="image de l'oeuvre musicale de G. Fauré">
                      </figure>
                  </div>
                  <div class="media-content column">
                      <p>
                          Musique de G. Fauré <i>"Pavane"</i>
                      </p>
                  </div>
                </article>
                  <br>
                <ul>
                  <li>Faire une application qui crée une oeuvre picturale par le biais de notes de musique</li>
                  <li>Problèmes : fiabilité des couleurs retenues - éthique, l'art automatisable ? - et la finalité de travail</li>
                  <li>Faire l'idée inverse, mettre en musique des éléments iconographiques</li>
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
  name: 'Genese',
  components: {
    Title,
  }
}
</script>

<style scoped>
  li {
    list-style: square;
  }
</style>
