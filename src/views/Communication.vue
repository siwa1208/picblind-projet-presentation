<template>
<div class="coommunication">
    <Title titre="Communication du projet" />
    <section class="section is-small">
        <div class="container">
            <div class="columns is-mobile is-centered">
                <div class="column is-10">
                        <div class="card">
                            <div class="card-content">
                                <div class="content">
                                    <p class="title is-4">Cibles :</p>
                                    <ul>
                                        <li>Coeur de cible :
                                            Personnes malvoyantes et atteinte de cécité.
                                        </li>
                                        <li>Cibles principales :
                                            Les familles et les aidants de notre coeur de cible.
                                        </li>
                                        <li>Cibles secondaires :
                                            Les associations, fédérations ayant pour objet l'accompagnement des personnes atteintes de cécité ou malvoyantes et les musées.</li>
                                        <li>Cibles tertitaires : 
                                            Les librairies  et médithèques disposant d'un rayon audiolivre.</li>
                                    </ul>

                                    <p class="title is-4">Canaux de communication :</p>
                                    <ul>
                                        <li>Création d'un dossier de communication avec livret, affiches et flyers.</li>
                                        <li>Communication via les blogs, réseaux sociaux, newsletters, magazines en lignes spécialisés.</li>
                                        <li>Communication via les médias radio et télévision.</li>
                                        <li>Communication par le site internet et le teaser.</li>
                                    </ul>

                                    <p class="title is-4">Budget prévisionnel :</p>
                                    <ul>
                                        <li>Un budget primaire de <strong>261 424,55€</strong> avec diffusion de 13 456 dossiers de communication.</li>
                                        <li>Un budget allégé de <strong>62 574,35€</strong> avec diffusion des dossiers par mails.</li>
                                        <li>Diminution prévisible en demandant des espaces publicitaires gratuits (SNPTV).</li>
                                        <li>Soumission de l'information sur le projet PicBlind auprès des chaînes de radio et de télévision.</li>
                                    </ul>
                                    <ul>
                                        <li>Elaboration d'un plan de gestion de crise en cas de dysfonctionnement.</li>
                                    </ul>

                                    <p class="title is-4">Teaser :</p>
                                        <video
                                            :key="video"
                                            controls
                                            >
                                            <source
                                                src="../assets/video/Teaser_PicBlind.mp4"
                                                alt="video teaser de l'application picblind"
                                                type="video/mp4"
                                            >
                                        </video>
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

import Title from '../components/layout/Title.vue'

export default {
  name: 'Communication',
  components: {
      Title,
  }
  }
</script>
<style scoped>
li {
    list-style-type :square;
}

video {
    width: 800px;
    height: auto;
    object-fit: cover;
}
</style>