

const LOCAL = 'http://localhost:8000';
const CLOUD = 'http://tumogu.cn:8080';

const local = false;

export const URL = (() => {
    let server = CLOUD;
    if (local) {
        server = LOCAL;
    }
    return {
        LOGIN: server + '/user/',
        SIGNUP: server + '/user/',
    }
})()
