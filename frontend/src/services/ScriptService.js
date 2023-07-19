import axios from 'axios';
import {URL_BASE} from '../recursos/urls';

const url = URL_BASE+'/scripts';

class ScriptService{
    getScripts(dificultad){
        return axios.get(url + '/random/' + dificultad);
    }
    // todos son request param
    subirScript(codigo, dificultad, respuesta){
        return axios.post(`${url}/crear/${dificultad}/${respuesta}`, codigo);
    }
}
const instance = new ScriptService();
export default instance;