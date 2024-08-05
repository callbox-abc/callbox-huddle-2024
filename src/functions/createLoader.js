import { writable } from 'svelte/store';

export function createLoader() {
  const { subscribe, set, update } = writable(false);

  async function start(routine) {
    set(true);
    await routine();
    set(false);
  }

  return {
    subscribe,
    set,
    update,
    start,
  };
}
