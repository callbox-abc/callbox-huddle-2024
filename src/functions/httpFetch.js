async function httpFetch(resource, dirtyInit) {
  const controller = new AbortController();
  const signal = controller.signal;

  let init = { signal };
  if (dirtyInit) {
    init = { ...dirtyInit };
  }

  let data;

  try {
    const res = await fetch(resource, init);
    if (res.ok) {
      data = await res.json();
    }
  } catch (error) {
    console.error(error);
  }

  return data;
}

export default httpFetch;
