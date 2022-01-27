<template>
<div class="planification">
   <Title titre="Planification" />
    <section class="section is-small">
        <div class="container">
            <div class="columns is-mobile is-centered">
                <div class="column is-8">
                    <div class="card">
                        <div class="card-content">
                            <div class="content">
                                <ul>
                                    <li>Méthode AGILE utilisée.</li><br>
                                    <li>Trello pour la réalisation des tâches.</li><br>
                                    <li>Google Drive.</li><br>
                                    <li>GitHub</li><br>
                                    <li>Organisation par le biais de Sprint</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <img src="../assets/img/Trello.png" alt="logo trello">
                    <p>Trello</p>
                </div>
                <div class="column">
                    <img src="../assets/img/Drive.png" alt="logo google drive">
                    <p>Google Drive</p>
                </div>
                <div class="column">
                    <img src="../assets/img/GitHub.png" alt="logo github">
                    <p>GitHub</p>
                </div>
            </div>
            <br>
            <Gantt titre="" />         
        </div>            
    </section>
</div>
</template>

<script>
import Title from '../components/layout/Title.vue'
import Gantt from '../components/Gantt.vue'

export default {
  name: 'Planification',
  components: {
      Title,
      Gantt,
  }
  }
</script>

<style scoped>
li {
    list-style-type :square;
}

img {
    position:relative;
}
</style>