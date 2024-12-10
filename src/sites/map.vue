<script setup>
</script>

<template>
    <h1 class="text-center mb-1">Karte</h1>
    <div class="map-container">
        <img src="/map.png" alt="Map of St. Gallen" class="map-image" />
    </div>
</template>

<style scoped>
/* Container styling */
.map-container {
  width: 100%;
  height: 64dvh;
  position: relative;
  overflow: hidden; /* Ensure cropping */
}

/* Image styling for desktop */
.map-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Mobile-specific styling */
@media (max-width: 768px) {
  .map-image {
    width: auto; /* Use natural width for cropping */
    height: 100%; /* Maintain full height */
    object-fit: none; /* Prevent scaling, focus on cropping */
    object-position: center; /* Crop to the center of the image */
  }
}
</style>
