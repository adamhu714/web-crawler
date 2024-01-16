function normalizeURL(url){
  const urlObj = new URL(url)
  fullPath = `${urlObj.hostname}${urlObj.pathname}`
  if (fullPath.length > 0 && fullPath.slice(-1) === '/') {
    fullPath = fullPath.slice(0, -1)
  }
  return fullPath
}

module.exports = {
  normalizeURL
}