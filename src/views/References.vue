<template>
<div class="reference">
    <Title titre="Références scientifiques"/>
    <section class="section is-small">
        <div class="container">
            <div class="columns is-mobile is-centered">
                <div class="column is-8">
                    <div class="card">
                        <div class="card-content">
                            <div class="content">
                                <p class="title is-4">Audition : pour substituer la vue défaillante</p>
                                    <ul>
                                        <li>Ouïe plus développée chez les personnes mal voyantes et aveugles.</li><br>
                                        <li>Travaux réalisés pour encoder l'environnement de la personne et créer un "paysage sonore".</li><br>
                                        <li>Place de la musique pour améliorer les représentations et les émotions.</li>
                                    </ul>
                                    <figure class="image is-inline-block">
                                        <img src="../assets/img/Figure-13.png" alt="image de l'analyse d'audition">
                                    </figure>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-content">
                            <div class="content">
                                <p class="title is-4">Mettre en phase couleurs et notes de musiques</p>
                                    <ul>
                                        <li>Travaux réalisés au cours des siècles pour associer couleurs et musiques.</li><br>
                                        <li>Convergence vers une gamme chromatique.</li><br>
                                        <li>Prise en compte partielle des contrastes picturaux par l'intensité musicale.</li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>    
            <div class="columns is-mobile is-centered box">
                <div class="column">
                    <img src="../assets/img/Figure-17.png" alt="image des gammes chromatiques">
                </div>
                <div class="column">
                    <img src="../assets/img/Figure-14.png" alt="image des gammes chromatiques">
                </div>
            </div>        
        </div>            
    </section>
</div>
</template>

<script>

import Title from '../components/layout/Title.vue'

export default {
  name: 'References',
  components:{
      Title,
  }
  }
</script>

<style scoped>
li {
    list-style-type :square;
}
</style>