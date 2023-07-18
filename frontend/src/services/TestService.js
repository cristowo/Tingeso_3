import axios from 'axios';
import {URL_BASE} from '../recursos/urls';

const url = URL_BASE+'/tests';

class TestService{
    getTest(dificultad){
        return axios.post(url + '/' + dificultad);
    }
}
const instance = new TestService();
export default instance;