import { readable } from 'svelte/store'
import { query } from './services/sw-cache.js'
import { stampsByAddress } from './domain/stamps.js'

export const app = readable({
  stamps: (addr) => stampsByAddress(addr).runWith({ query }).toPromise()
})