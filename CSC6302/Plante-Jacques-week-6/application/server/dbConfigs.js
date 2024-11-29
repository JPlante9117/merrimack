import dotenv from 'dotenv';

dotenv.config();

const readOnlyConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_READ_USER,
    password: process.env.DB_READ_PASSWORD,
    database: process.env.DB_NAME,
};

const modifyConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_MODIFY_USER,
    password: process.env.DB_MODIFY_PASSWORD,
    database: process.env.DB_NAME,
};

const getConfig = (userType) => {
    return !userType ? {} : userType === 'read_only' ? readOnlyConfig : modifyConfig;
}

export {
    getConfig
};
