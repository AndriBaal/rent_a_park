<script setup>
import ParkingCard from '../components/ParkingCard.vue';
// import records from '../records/records.js';
</script>

<template>
  <h1 class="text-center mb-4">Meine Parkplätze</h1>
  <div class="row justify-content-center">
    <!-- <div
      v-for="record in records"
      :key="record.name"
      class="col-12 col-md-6 d-flex justify-content-center"
    >
      <ParkingCard :record="record" />
    </div> -->
    <div class="mb-2 mx-2">
      <div class="btn btn-primary col-12">+ Inserat erstellen</div>
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
