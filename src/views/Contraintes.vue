<template>
<div class="contraintes">
    <Title titre="Contraintes techniques" />
    <section class="section is-medium">
        <div class="container">
            <div class="columns is-mobile is-centered">
                <div class="column is-6">
                        <div class="card">
                            <div class="card-content">
                                <div class="content">
                                    <ul>
                                        <li>Manques de compétences dans le domaine de l'application / langage de programmation.</li><br>
                                    </ul>
                                    <ul>
                                        <li>Manques de compétences et connaissances dans le domaine de l'IA.</li> <br>
                                    </ul>
                                    <ul>
                                        <li>Intégration de l'IA sur mobile.</li> <br>
                                    </ul>
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
name: 'Contraintes',
components: {
    Title,
}

}
</script>

<style scoped>
li {
    list-style-type :square;
}
</style>