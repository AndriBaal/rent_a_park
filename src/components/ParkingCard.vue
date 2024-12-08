<template>
	<div class="card" @click="goToDetail">
		<img :src="record.img" class="card-img-top" :alt="record.name" />
		<div class="card-body">
			<h5 class="card-title">{{ record.name }}</h5>
			<p class="card-text">
				{{ record.street }}, {{ record.plz }} {{ record.ort }}<br />
				<span>Preis pro Stunde: {{ record.preis.toFixed(2) }} CHF</span><br />
				<span>Entfernung: {{ record.distance }}m</span>
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ParkingCard',
	props: {
		record: {
			type: Object,
			required: true
		}
	},
	methods: {
		goToDetail() {
			window.scrollTo(0,0);
			this.$router.push(`/parking/${this.record.name}`);
		}
	}
};
</script>

<style scoped>
.card {
	width: 100%;
	max-width: 300px;
	margin: 10px;
	cursor: pointer;
	border: 1px solid #ddd;
	border-radius: 5px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	overflow: hidden;
	transition: transform 0.2s ease-in-out;
}
.card:hover {
	transform: scale(1.05);
}
.card-img-top {
	height: 200px;
	object-fit: cover;
}
.card-body {
	padding: 15px;
	text-align: center;
}
.card-title {
	font-size: 1.25rem;
	margin-bottom: 10px;
	font-weight: bold;
}
.card-text {
	font-size: 0.9rem;
	color: #666;
}
</style>
