import axios from 'axios';

const url = 'http://gateway-service:8080/test';

class TestService{
    getTest(dificultad){
        return axios.get(url + '/' + dificultad);
    }
}
const instance = new TestService();
export default instance;