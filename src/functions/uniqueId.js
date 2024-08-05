function uniqueId(len = 6, prefix = 'uid_') {
  const arr = crypto.getRandomValues(
    new Uint8Array(Math.ceil(Math.min(len, 40) / 2))
  );
  const enc = Array.from(arr, (dec) => dec.toString(36)).join('');
  return `${prefix}${enc}`;
}

export default uniqueId;
