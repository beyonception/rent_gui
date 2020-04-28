const dev = {
    urls: {
        USER_SERVICE: "http://34.87.166.85:5000/api/userService/",
        EXPENSE_SERVICE: "http://34.87.53.224:4000/api/expService/",
        AUTH_SERVICE: "http://34.87.100.137:7000/api/authService/"
    }
}

const prod = {
    urls: {
        USER_SERVICE: "http://34.87.53.224:5000/api/userService/",
        EXPENSE_SERVICE: "http://34.87.166.85:4000/api/expService/",
        AUTH_SERVICE: "http://34.87.100.137:7000/api/authService/"
    }
}

const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    ...config
};