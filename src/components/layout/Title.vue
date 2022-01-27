<template>
    <div class="titre">
        <div class="columns is-mobile is-centered is-vcentered">
           <div class="column has-text-centered">
               <figure class="image is-128x128 is-inline-block">
                   <img src="../../assets/logo/Black.png" alt="logo picblind">
               </figure>
           </div>
           <div class="column has-text-centered">
                <h1 class='title'>
                   {{titre}}
               </h1>
           </div>
           <div class="column has-text-centered">
                <figure class="image is-128x128 is-inline-block">
                   <img src="../../assets/logo/Black.png" alt="logo picblind">
               </figure>
           </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Titre',
    props:{
        titre: String
    }
}
</script>