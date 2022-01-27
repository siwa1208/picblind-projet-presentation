<template>
    <div class="application">
        <section class="section is-small">
            <div class="columns is-mobile is-centered">
                <div class="column is-half has-text-centered">
                    <p class="title is-4">{{titre}}</p>
                    <img src="../assets/img/Figure-20.png" alt="image du planning gantt">
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Gantt',
    props:{
        titre: String,
    }
}
</script>