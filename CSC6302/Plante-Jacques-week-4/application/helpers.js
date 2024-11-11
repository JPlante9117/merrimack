const checkArguments = (args) => {
    for (const [key, value] of Object.entries(args)) {
        if (value === null) {
            return key;
        }
    }

    return false;
}

module.exports = {
    checkArguments
}