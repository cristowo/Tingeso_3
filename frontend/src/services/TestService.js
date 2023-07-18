import axios from 'axios';
import {URL_BASE} from '../recursos/urls';

const url = URL_BASE+'/tests';

class TestService {
    getPuntaje = async (scripts, resultados, tiempo) => {
        return axios.post(`${url}/resultado/${scripts}/${resultados}/${tiempo}`);
  }
}
const instance = new TestService();
export default instance;