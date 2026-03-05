const { isPalindrome, wordCount, capitalize, camelCase, truncate } = require('../stringUtils');

describe('isPalindrome', () => {
  test('returns true for "racecar"', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });
  test('returns false for "hello"', () => {
    expect(isPalindrome('hello')).toBe(false);
  });
  test('handles mixed case and non-alphanumeric chars', () => {
    expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
  });
  test('returns true for empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });
  test('returns true for single character', () => {
    expect(isPalindrome('a')).toBe(true);
  });
});

describe('wordCount', () => {
  test('counts words in "hello world"', () => {
    expect(wordCount('hello world')).toBe(2);
  });
  test('counts four words', () => {
    expect(wordCount('one two three four')).toBe(4);
  });
  test('handles extra whitespace', () => {
    expect(wordCount('  spaces  everywhere  ')).toBe(2);
  });
  test('returns 0 for empty string', () => {
    expect(wordCount('')).toBe(0);
  });
});

describe('capitalize', () => {
  test('capitalizes "hello"', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
  test('lowercases rest of "WORLD"', () => {
    expect(capitalize('WORLD')).toBe('World');
  });
  test('handles mixed case input', () => {
    expect(capitalize('already Capital')).toBe('Already capital');
  });
  test('returns empty string for empty input', () => {
    expect(capitalize('')).toBe('');
  });
});

describe('camelCase', () => {
  test('converts space-separated words', () => {
    expect(camelCase('hello world')).toBe('helloWorld');
  });
  test('converts hyphen-separated words', () => {
    expect(camelCase('foo-bar-baz')).toBe('fooBarBaz');
  });
  test('converts underscore-separated words', () => {
    expect(camelCase('my_function_name')).toBe('myFunctionName');
  });
  test('returns single word unchanged', () => {
    expect(camelCase('single')).toBe('single');
  });
});

describe('truncate', () => {
  test('does not truncate short string', () => {
    expect(truncate('hi', 10)).toBe('hi');
  });
  test('truncates and adds ellipsis', () => {
    expect(truncate('hello world', 5)).toBe('hello...');
  });
  test('does not truncate at exact length', () => {
    expect(truncate('exactly', 7)).toBe('exactly');
  });
  test('truncates to 3 characters', () => {
    expect(truncate('toolong', 3)).toBe('too...');
  });
});
