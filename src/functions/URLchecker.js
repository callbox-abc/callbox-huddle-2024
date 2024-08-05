export default function (website) {
  if (!website.match(/^https:/) && website.length) {
    website = 'https://' + website;
  }

  return website;
}
