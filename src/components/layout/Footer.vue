<template>
    <footer class="footer is-mobile is-centered">
        <div class="content has-text-centered">
            <p>
            <strong>PicBlind</strong> créé Ségolène IWA & Benoît DOZOLME, étudiants en 2ème année de Master
            <a href="https://psm-montbeliard.fr/">PSM</a>.
            </p>
        </div>
    </footer>
</template>

<script>

export default {
  data() {
      return {
          currentYear: new Date().getFullYear()
      }
  }
}
</script>

<style>
footer {
  margin-top: auto;
}
</style>