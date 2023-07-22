package tingeso3.testservice.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import tingeso3.testservice.entities.TestEntity;
import tingeso3.testservice.models.ScriptModel;
import tingeso3.testservice.repositories.TestRepository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;

@Service
public class TestService {
    @Autowired
    TestRepository testRepository;

    @Autowired
    RestTemplate restTemplate;

    public List<ScriptModel> getScripts(String dificultad){
        ScriptModel[] scripts = restTemplate.getForObject("http://script-service/scripts/random/" + dificultad, ScriptModel[].class);
        return Arrays.stream(scripts).toList();
    }

    public ScriptModel getScript(Integer id){
        return restTemplate.getForObject("http://script-service/scripts/" + id, ScriptModel.class);
    }

    public List<String> getPuntaje(List<Integer> Idscripts, List<String> respuestas, String tiempo){
        TestEntity test = new TestEntity();
        test.setRespuestas(respuestas);
        test.setTiempoTotal(tiempo);
        List<String> lista = new ArrayList<>();
        double acum = 0;
        Integer idScriptSize = Idscripts.size();
        for(int i = 0; i < idScriptSize; i++){
            ScriptModel script = getScript(Idscripts.get(i));
            if (Objects.equals(script.getRespuesta(), respuestas.get(i))){
                acum = acum + 7;
                lista.add("Buena");
            }else{
                acum = acum + 1;
                lista.add("Mala");
            }
        }
        double puntaje = acum/idScriptSize;
        test.setPuntaje(puntaje);
        test.setIdScripts(Idscripts);
        testRepository.save(test);
        lista.add(Double.toString(puntaje));
        return lista;
    }

}
