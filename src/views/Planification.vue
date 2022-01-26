<template>
<div class="planification">
    <div>
        <h1 class='title 
            has-text-centered'>Planification du projet</h1>
    </div>
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
            <div class="columns is-mobile is-centered">
                <div class="column is-6 has-text-centered">
                    <p class="title is-4">Gantt PFE - PicBlind</p>
                    <img src="../assets/logo/Black.png" alt="logo picblind app">
                </div>
            </div>          
        </div>            
    </section>
</div>
</template>

<script>
export default {
  name: 'Planification',
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