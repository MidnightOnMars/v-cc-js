function isPalindrome(str) {
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleaned === cleaned.split('').reverse().join('');
}

function wordCount(str) {
  const trimmed = str.trim();
  if (trimmed === '') return 0;
  return trimmed.split(/\s+/).length;
}

function capitalize(str) {
  if (str === '') return '';
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function camelCase(str) {
  const words = str.split(/[\s\-_]+/).filter(w => w.length > 0);
  if (words.length === 0) return '';
  return words[0].toLowerCase() + words.slice(1).map(w => w[0].toUpperCase() + w.slice(1).toLowerCase()).join('');
}

function truncate(str, maxLen) {
  if (str.length <= maxLen) return str;
  return str.slice(0, maxLen) + '...';
}

module.exports = { isPalindrome, wordCount, capitalize, camelCase, truncate };
