const { test, expect } = require('@jest/globals')
const { normalizeURL } = require('./crawl.js')

test('normalizes https://blog.boot.dev/', () => {
    expect(normalizeURL('')).toBe();
});