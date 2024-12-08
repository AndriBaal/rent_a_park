import { createMemoryHistory, createRouter } from 'vue-router'

import ParkingSpots from './sites/parking_spots.vue'
import MyParkingSpots from './sites/my_parking_spots.vue'
import ParkingDetail from './sites/parking_detail.vue'
import Settings from './sites/settings.vue'

const routes = [
  { path: '/', component: ParkingSpots },
  { path: '/my', component: MyParkingSpots },
  { path: '/settings', component: Settings },
  { path: '/parking/:name', component: ParkingDetail, props: true }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router