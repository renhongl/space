

const LOCAL = 'http://localhost:8000';
const CLOUD = 'http://47.74.217.61:8080';

const local = false;

export const URL = (() => {
    let server = CLOUD;
    if (local) {
        server = LOCAL;
    }
    return {
        LOGIN: server + '/user/',
    }
})()
