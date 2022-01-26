<template>
<div class="analyse">
    <div>
        <h1 class='title 
            has-text-centered'>Analyse du projet</h1>
    </div>
    <section class="section is-small">
        <div class="container">
            <p class="title is-4">Concurrences</p>
            <div class="columns is-mobile is-centered">
                <div class="column">
                    <img src="../assets/img/PicSound.png" alt="logo picsound app">
                    <p>PicSound</p>
                </div>
                <div class="column">
                        <img src="../assets/img/PicSong.png" alt="logo picsong app">
                        <p>PicSong</p>
                </div>
                <div class="column">
                    <img src="../assets/img/Melobytes.png" alt="logo meloobytes app">
                    <p>Melobytes</p>
                </div>
                <div class="column">
                    <img src="../assets/img/Be-my-eyes.png" alt="logo be my eyes app">
                    <p>Be my eyes</p>
                </div>
            </div>
            <div class="columns is-mobile is-centered">
                <div class="column is-8">
                    <div class="card">
                        <div class="card-content">
                            <div class="content">
                                <p class="title is-6">Faisabilité</p>
                                <p>Technique :</p>
                                    <ul>
                                        <li>Tous les outils sont à dispotions mais pas à titre individuel.</li><br>
                                        <li>Programmation en Python pour la conception de l'IA.</li><br>
                                        <li>Pour le son, utilisation des travaux de recherches pour alimenter la base de données.</li>
                                    </ul>
                                    <p>Juridique : </p>
                                    <ul>
                                        <li>Pas de données collectées ou utilisées par un organisme tiers, donc pas de déclaration concernant la RGPD.</li> <br>
                                    </ul>
                                    <p class="title is-6">Structure d'accueil projet</p>
                                    <ul>
                                        <li>Les associations de loi 1901 à but non lucratif.</li>
                                    </ul>
                                    <p>Avantages :</p>
                                    <li>Une rapidité de la création.</li><br>
                                    <li>Une absence de côtisations sociales.</li><br>
                                    <li>Une compatibilitée allégée</li><br>
                                    <li>Une reconnaissance en tant qu'entité juridique</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>            
    </section>
</div>
</template>

<script>
export default {
  name: 'Analyse',
  }
</script>

<style scoped>
li {
    list-style-type :square;
}
</style>