const { crawlPage } = require('./crawl.js')
const { printReport } = require('./report.js')

async function main() {
    if (process.argv.length != 3) {
        console.log(`Error, please provide exactly 1 URL as a parameter.`)
    }
    const baseURL = process.argv[2]
    console.log(`Starting crawl of: ${baseURL}`)

    const pages = await crawlPage(baseURL, baseURL, {})
    
    printReport(pages)
}
main()