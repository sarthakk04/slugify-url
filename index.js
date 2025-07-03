// index.js
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-") // replace spaces & non-word chars with -
    .replace(/^-+|-+$/g, ""); // remove leading/trailing dashes
}

module.exports = slugify;
