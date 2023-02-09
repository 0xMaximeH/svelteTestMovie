import { writable } from 'svelte/store';

export const user = writable({
  name: "Maxime",
  email: "mail@com"
})