import axios from 'axios';
import {URL_BASE} from '../recursos/urls';

const url = URL_BASE+'/scripts';

class ScriptService{
    getScripts(dificultad){
        return axios.get(url + '/random/' + dificultad);
    }
}
const instance = new ScriptService();
export default instance;