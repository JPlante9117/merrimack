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

const defaultCallback = (err, payload) => {
    if (err) {
        return err;
    }

    return payload;
}

const loggingCallback = (err, payload) => {
    if (err) {
        console.log("Error: ", err);
        return err;
    }

    console.log(payload);
    return payload;
}

export {
    checkArguments,
    isString,
    defaultCallback,
    loggingCallback
}