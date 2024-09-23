<template>
  <div class="h-screen flex">
    <div class="m-auto">
      <div class="wrap">
        <h1>Wareen.me est en cours de maintenance</h1>
        <h2>
          <p>
            Le site subit des mises à jour.<br />
            Nous serons bientôt de retour.
          </p>
        </h2>
        <p>Merci de votre patience.</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.vh {
  height: 100%;
  align-items: center;
  display: flex;
}
.vh > div {
  width: 100%;
  text-align: center;
  vertical-align: middle;
}
img {
  max-width: 100%;
}
.wrap {
  text-align: center;
}
.wrap h1 {
  font-size: 30px;
  font-weight: 700;
  margin: 0 0 90px;
}
.wrap h2 {
  font-size: 24px;
  font-weight: 400;
  line-height: 1.6;
  margin: 0 0 80px;
}
@-webkit-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@-moz-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
