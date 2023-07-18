import axios from 'axios';
import {URL_BASE} from '../recursos/urls';

const url = URL_BASE+'/tests';

class TestService{
    getTest(dificultad){
        return axios.post(url + '/' + dificultad);
    }
    getPuntaje = async (id, resultados, tiempo) => {
        console.log(url + '/resultado/' + id + '/' + resultados[0] + ',' + resultados[1] + ',' + resultados[2] + ',' + resultados[3] + '/');
    
        return axios.put(url + '/resultado/' + id + '/' + resultados[0] + ',' + resultados[1] + ',' + resultados[2] + ',' + resultados[3] + '/' + tiempo);
      }
}
const instance = new TestService();
export default instance;