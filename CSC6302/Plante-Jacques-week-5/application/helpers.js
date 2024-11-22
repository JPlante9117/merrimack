const checkArguments = (args) => {
    for (const [key, value] of Object.entries(args)) {
        if (value === null) {
            return key;
        }
    }

    return false;
}

const isString = (item) => {
    return typeof item === 'string';
}

const isEmpty = (arr) => {
    return arr.length === 0;
}

export {
    checkArguments,
    isString,
    isEmpty
}