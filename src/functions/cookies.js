function getCookie(name) {
  return (
    document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() ?? ''
  );
}

function cookieExists(name) {
  const regex = new RegExp('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
  return regex.test(document.cookie);
}

function setCookie(name, value, days = 0, path = '/') {
  let expires = '';
  if (days > 0) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `;expires=${date.toUTCString()}`;
  }

  document.cookie = `${name}=${value}${expires};path=${path}`;
}

export { getCookie, cookieExists, setCookie };
