import axios from 'axios';

const $http = axios.create({
    baseURL: 'https://reqres.in/api/'
})

class ApiClient {
    static getList() {
        return $http.get('/unknown');
    }

    static login(email, password) {
        return $http.post('/login', {
            email,
            password
        });
    }
}

export default ApiClient;