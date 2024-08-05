import { writable } from 'svelte/store';

const initialValue = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  website: '',
  message: '',
  utmCampaign: '',
  utmSource: '',
  utmMedium: '',
};

function createPayload() {
  const { subscribe, set, update } = writable({ ...initialValue });

  function reset() {
    set({ ...initialValue });
  }

  return {
    subscribe,
    set,
    update,
    reset,
  };
}

export const payload = createPayload();
