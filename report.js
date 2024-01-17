function printReport(pages) {
    console.log(`Report is starting:`)
    console.log()
    const sortedPages = sortPages(pages)
    for (const sortedPage of sortedPages){
      const url = sortedPage[0]
      const count = sortedPage[1]
      console.log(`Found ${count} internal links to ${url}`)
    }
  }

  // highest counts first in the list
  function sortPages(pages){
    // 2D array where the
    // inner array: [ url, count ]
    const pagesArr = Object.entries(pages)
    pagesArr.sort((pageA, pageB) => {
      return pageB[1] - pageA[1]
    })
    return pagesArr
  }
  
  module.exports = {
    printReport,
    sortPages
  }