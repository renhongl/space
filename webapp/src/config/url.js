

const LOCAL = 'http://localhost:8000';
const CLOUD = 'http://tumogu.cn:8080';

const local = true;

export const URL = (() => {
    let server = CLOUD;
    if (local) {
        server = LOCAL;
    }
    return {
        USER: server + '/user/',
        MESSAGE_BOARD: server + '/messageboard/'
    }
})()
