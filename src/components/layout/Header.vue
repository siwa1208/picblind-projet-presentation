<template>
<section class="section">
      <nav class="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">    
          <a role="button" class="navbar-burger" data-target="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbar-burger" class="navbar-menu">
          <div class="navbar-start ">
            <hr class="navbar-divider">
            <div class="navbar-item">
              <a class="navbar-item"><router-link to="/genese">Genèse du projet</router-link></a>
              <a class="navbar-item"><router-link to="/objectifs">Objectifs</router-link></a>
              <a class="navbar-item"><router-link to="/public">Public</router-link></a>
              <a class="navbar-item"><router-link to="/references">Références scientifiques</router-link></a>
              <a class="navbar-item"><router-link to="/analyse">Analyse du projet</router-link></a>
              <a class="navbar-item"><router-link to="/contraintes">Contraintes techniques</router-link></a>
              <a class="navbar-item"><router-link to="/planification">Planification</router-link></a>
              <a class="navbar-item"><router-link to="/communication">Communication du projet</router-link></a>
              <a class="navbar-item"><router-link to="/realisation">Réalisation</router-link></a>
              <a class="navbar-item"><router-link to="/probleme">Problèmes</router-link></a>
            </div>
          </div>
        </div>
      </nav>
</section>
</template>

<script>
export default {
    name: 'Header'
}
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
</script>

<style scoped>
a {
  color: #CCCBCB;
}

a.router-link-exact-active {
  color: #494945;
}

.text {
  margin-left: 2%;
}
</style>