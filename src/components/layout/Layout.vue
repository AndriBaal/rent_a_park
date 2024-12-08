<script setup>
</script>

<template>
	<div class="d-flex flex-column vh-100">
		<!-- Header -->
		<header class="d-flex py-2 bg-primary text-white position-fixed w-100 top-0 z-2">
			<button
				class="btn btn-primary d-md-none ms-2 position-absolute"
				@click="toggleSidebar"
				aria-label="Toggle Sidebar"
			>
				☰
			</button>
			<img
				src="/logo.png"
				alt="Rent-a-Park Logo"
				class="mx-auto"
				style="height: 40px;"
			/>
		</header>

		<!-- Main Layout -->
		<div class="d-flex flex-column flex-grow-1 pt-5">
			<div class="d-flex flex-grow-1">
				<!-- Sidebar -->
				<nav class="bg-light position-absolute d-md-block">
					<div
						class="sidebar vh-100 p-4 bg-light position-fixed z-1"
						:class="{ 'slide-in': isSidebarOpen, 'slide-out': !isSidebarOpen }"
					>
						<button
							class="btn btn-close position-absolute top-0 end-0 m-4 d-md-none"
							@click="toggleSidebar"
							aria-label="Close Sidebar"
						></button>

						<h5 class="mb-4">Menu</h5>
						<ul class="nav flex-column">
							<li class="nav-item">
								<RouterLink
									@click="toggleSidebar()"
									to="/"
									class="nav-link"
									active-class="active"
								>
									<i class="bi bi-house-door me-2"></i> Parkplätze
								</RouterLink>
							</li>
							<li class="nav-item">
								<RouterLink
									@click="toggleSidebar()"
									to="/my"
									class="nav-link"
									active-class="active"
								>
									<i class="bi bi-car-front me-2"></i> Meine Parkplätze
								</RouterLink>
							</li>
							<li class="nav-item">
								<RouterLink
									@click="toggleSidebar()"
									to="/settings"
									class="nav-link"
									active-class="active"
								>
									<i class="bi bi-gear me-2"></i> Einstellungen
								</RouterLink>
							</li>
						</ul>
					</div>
				</nav>

				<!-- Content -->
				<main class="container py-4 flex-grow-1">
					<div class="row justify-content-center">
						<div class="col-12 col-md-6">
							<slot></slot>
						</div>
					</div>
				</main>
			</div>

			<!-- Footer -->
			<footer class="bg-secondary text-white py-2 text-center">
				<p class="mb-0">© 2024 Rent-a-Park. All Rights Reserved.</p>
			</footer>
		</div>
	</div>
</template>

<script>
export default {
	name: "Layout",
	data() {
		return {
			isSidebarOpen: false,
		};
	},
	methods: {
		toggleSidebar() {
			document.body.classList.toggle('overflow-hidden');
			this.isSidebarOpen = !this.isSidebarOpen;
		},
	},
};
</script>

<style scoped>
.sidebar {
	width: 250px;
}

.nav-link {
	color: #333;
	padding: 10px 15px;
	border-radius: 5px;
	font-weight: 500;
	transition: background-color 0.2s, color 0.2s;
	text-decoration: none;
}

.nav-link:hover {
	background-color: #f8f9fa;
	color: var(--bs-primary);
}

.nav-link.active {
	background-color: var(--bs-primary);
	color: #fff !important;
}

.nav-link i {
	font-size: 1.2rem;
	vertical-align: middle;
}

footer {
	position: relative;
	bottom: 0;
	width: 100%;
}

@media (max-width: 768px) {
	.sidebar {
		width: 100%;
		opacity: 0;
		transform: translateX(-100%);
		transition: transform 0.3s ease, opacity 0.3s ease;
	}

	.sidebar.slide-in {
		transform: translateX(0);
		opacity: 1;
	}

	.sidebar.slide-out {
		transform: translateX(-100%);
		opacity: 0;
	}
}
</style>
