import dates from "./dates.js"

const functions = {
    ...dates,
}

export default (config) => {
    for (const [name, fnc] of Object.entries(functions)) {
        config.addNunjucksGlobal(name, fnc)
    }
}
