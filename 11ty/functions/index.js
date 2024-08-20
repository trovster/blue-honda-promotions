import dates from "./dates.js"

const functions = {
    ...dates,
}

export default (config) => {
    Object.entries(functions).forEach((item) => {
        const [key, functionName] = item
        config.addNunjucksGlobal(key, functionName)
    })
}
