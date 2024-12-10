<script setup>
</script>

<template>
  <h1 class="text-center mb-4">Meine Parkplätze</h1>
  <div class="row justify-content-center">
    <div class="mb-2 mx-2">
      <div class="btn btn-primary col-12" @click="this.$router.push(`/parking/new`);">+ Inserat erstellen</div>
    </div>
  </div>
</template>

<style scoped>
.container {
	padding: 20px;
}
.row {
	gap: 15px;
}
</style>
