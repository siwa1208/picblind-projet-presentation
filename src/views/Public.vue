<template>
<div class="public">
    <Title titre="Public ciblé" />
    <section class="section is-small">
        <div class="container">
            <div class="columns is-mobile is-centered">
                <div class="column is-8">
                    <div class="card">
                        <div class="card-content">
                            <div class="content">
                                <p class="title is-6">Pour notre application notre public ciblé sont les personnes aveugles et malvoyantes.</p>
                                <p>En France : </p>
                                    <ul>
                                        <li><strong>207 000</strong> personnes sont considérées comme aveugles.</li> <br>
                                        <li><strong>932 000</strong> personnes sont considérées comme malvoyantes.</li> <br>
                                    </ul>
                                    <p>Dans le monde : </p>
                                    <ul>
                                        <li><strong>253 millions</strong> de personnes présentent une déficience visuelle.</li> <br>
                                        <li>Dont <strong>36 millions</strong> sont aveugles et <strong>217 millions</strong> présentent une déficience visuelle modérée à sévère.</li> <br>
                                    </ul>
                                    <p>Personnes sont catégorisables en trois :</p>
                                    <ul>
                                        <li>Les aveugles et mal voyants de naissance.</li> <br>
                                        <li>Les personnes victimes d'accidents.</li> <br>
                                        <li>Les personnes plutôt âgées souffrant de DMLA ou autres pathologies conduisant à la cécité.</li>
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
  name: 'Public',
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