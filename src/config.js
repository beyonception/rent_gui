const local = {
    urls: {
        USER_SERVICE: "http://localhost:5000/api/userService/",
        EXPENSE_SERVICE: "http://localhost:4000/api/expService/",
        AUTH_SERVICE: "http://localhost:7000/api/authService/"
    }
}

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

const getConfig = () => {
    switch (process.env.REACT_APP_STAGE) {
        case local: {
            return local
        }
        case dev: {
            return dev
        }
        case prod: {
            return prod
        }
        default: {
            return dev
        }
    }
}

const config = getConfig()

export default {
    ...config
};