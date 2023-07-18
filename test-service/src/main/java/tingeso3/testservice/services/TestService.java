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

    public List<ScriptModel> newTest(String dificultad){
        TestEntity testEntity = new TestEntity();
        testEntity.setDificultad(dificultad);
        List<ScriptModel> scripts = getScripts(dificultad);
        List<Integer> lista = new ArrayList<>();
        for(int i=0; i < scripts.size(); i++){
            lista.add(scripts.get(i).getId());
        }
        testEntity.setIdScripts(lista);
        testRepository.save(testEntity);
        return scripts;
    }

    public List<ScriptModel> getScripts(String dificultad){
        ScriptModel[] scripts = restTemplate.getForObject("http://script-service/scripts/random/" + dificultad, ScriptModel[].class);
        return Arrays.stream(scripts).toList();
    }

    public ScriptModel getScript(Integer id){
        return restTemplate.getForObject("http://script-service/scripts/" + id, ScriptModel.class);
    }

    public List<String> getPuntaje(Integer idtest, List<String> respuestas, Double tiempo){
        TestEntity test = testRepository.getTestEntityById(idtest);
        System.out.println(test);
        test.setRespuestas(respuestas);
        test.setTiempoTotal(tiempo);
        double acum = 0;
        List<String> lista = new ArrayList<>();
        for(int i = 0; i < test.getIdScripts().size(); i++){
            if (Objects.equals(getScript(test.getIdScripts().get(i)).getRespuesta(), respuestas.get(i))){
                acum = acum + 7;
                lista.add("Buena");
                System.out.println("olaaaa");
                System.out.println(test.getIdScripts().get(i));
            }else{
                acum = acum + 1;
                lista.add("Mala");
                System.out.println("adioooos");
                System.out.println(test.getIdScripts().get(i));

            }
        }
        double puntaje = acum/test.getIdScripts().size();
        test.setPuntaje(puntaje);
        testRepository.save(test);
        lista.add(Double.toString(puntaje));
        System.out.println(lista);
        return lista;
    }

}
