<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import records from '@/records/records.js';

const route = useRoute();
const router = useRouter();
const record = ref(records.find(r => r.name === route.params.name) || {});

function goBack() {
	router.go(-1); // Navigate back to the previous page
}
</script>

<template>
	<div class="container">
		<!-- Title and Back Button -->
		<div class="d-flex align-items-center">
            <button class="btn btn-secondary start-0 my-2" @click="goBack">
                ←
            </button>
			<h1 class="mb-0 flex-grow-1 text-truncate" style="font-size: 1.5rem;">{{ record.name }}</h1>
		</div>

		<div class="mx-auto">
			<img :src="record.img" class="card-img-top mb-3" :alt="record.name" />
			<form>
				<div class="mb-2">
					<label class="form-label">Name</label>
					<input type="text" class="form-control" v-model="record.name" readonly />
				</div>
				<div class="mb-2">
					<label class="form-label">Ort</label>
					<input type="text" class="form-control" v-model="record.ort" readonly />
				</div>
				<div class="mb-2">
					<label class="form-label">Postleitzahl (PLZ)</label>
					<input type="text" class="form-control" v-model="record.plz" readonly />
				</div>
				<div class="mb-2">
					<label class="form-label">Strasse</label>
					<input type="text" class="form-control" v-model="record.street" readonly />
				</div>
				<div class="mb-2">
					<label class="form-label">Preis pro Stunde</label>
					<input type="text" class="form-control" v-model="record.preis" readonly />
				</div>
				<div class="mb-2">
					<label class="form-label">Distanz (Meter)</label>
					<input type="text" class="form-control" v-model="record.distance" readonly />
				</div>
				<button class="btn btn-primary w-100">JETZT MIETEN!</button>
			</form>
		</div>
	</div>
</template>

<style scoped>
/* Title and Back Button Styling */
.d-flex {
	gap: 10px;
}

button.btn-outline-primary {
	font-size: 1.2rem;
	padding: 6px 12px;
	border-radius: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
}

button.btn-outline-primary i {
	font-size: 1.3rem;
	margin-right: 5px;
}

h1 {
	font-size: 1.5rem;
	font-weight: bold;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

/* Card Image Styling */
.card-img-top {
	height: 300px;
	object-fit: cover;
	border-radius: 10px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
