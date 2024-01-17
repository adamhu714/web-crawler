function main() {
    if (process.argv.length != 3) {
        console.log(`Error, please provide exactly 1 URL as a parameter.`)
    }
    baseURL = process.argv[2]
    console.log(`Starting crawl of: ${baseURL}`)
    return baseURL
}
main()