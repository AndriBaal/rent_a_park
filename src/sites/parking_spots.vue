<script setup>
import { ref } from 'vue';
import ParkingCard from '../components/ParkingCard.vue';
import records from '../records/records.js';

// State to track filter button text
const filterButtonText = ref('Filtern');

function toggleFilterText() {
  filterButtonText.value =
    filterButtonText.value === 'Filtern' ? 'Filter ausblenden' : 'Filtern';
}
</script>

<template>
  <h1 class="text-center">Parkplätze</h1>

  <!-- Collapsible Filter Form -->
  <div class="container p-0">
    <button
      class="btn btn-outline-primary w-100 mb-1"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#filterForm"
      aria-expanded="false"
      aria-controls="filterForm"
      @click="toggleFilterText"
    >
      {{ filterButtonText }}
    </button>

    <div class="collapse" id="filterForm">
      <form class="bg-light p-3 rounded shadow-sm">
        <div class="row g-3">
          <!-- Search Bar -->
          <div class="col-12">
            <input
              type="text"
              class="form-control"
              placeholder="Adresse oder Ort suchen..."
            />
          </div>

          <!-- Price -->
          <div class="col-md-6 mt-0">
            <input
              type="number"
              class="form-control"
              placeholder="Max. Preis"
            />
          </div>

          <!-- Distance Slider -->
          <div class="col-md-6 mt-0">
            <label for="distanceSlider" class="form-label">Distanz (km): <span id="distanceValue">5</span></label>
            <input
              type="range"
              class="form-range"
              id="distanceSlider"
              min="0"
              max="10"
              value="5"
              oninput="document.getElementById('distanceValue').textContent = this.value"
            />
          </div>

          <!-- Time Slots -->
          <div class="col-12 mt-0">
            <label class="form-label">Zeitraum:</label>
            <div class="input-group">
              <span class="input-group-text">Von</span>
              <input type="time" id="fromTime" class="form-control" />
              <span class="input-group-text">Bis</span>
              <input type="time" id="toTime" class="form-control" />
            </div>
          </div>

          <!-- Submit Button -->
          <div class="col-12 text-center">
            <button type="submit" class="btn btn-primary w-100">Filtern</button>
          </div>
        </div>
      </form>
    </div>
  </div>

  <!-- Parking Cards -->
  <div class="row justify-content-center">
    <div
      v-for="record in records"
      :key="record.name"
      class="col-12 col-md-6 d-flex justify-content-center"
    >
      <ParkingCard :record="record" />
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
