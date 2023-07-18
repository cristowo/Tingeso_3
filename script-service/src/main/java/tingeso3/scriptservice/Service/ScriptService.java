package tingeso3.scriptservice.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import tingeso3.scriptservice.Entities.ScriptEntity;
import tingeso3.scriptservice.Repositories.ScriptRepository;

import java.io.IOException;
import java.util.*;

@Service
public class ScriptService {
    @Autowired
    ScriptRepository scriptRepository;

    public void guardarScript(MultipartFile codigo, String dificultad, String respuesta) {
        ScriptEntity script = new ScriptEntity();
        try {
            // Leer los bytes del archivo
            byte[] codigoBytes = codigo.getBytes();

            // Convertir los bytes del archivo en una cadena (asumiendo que es texto)
            String codigoString = new String(codigoBytes);

            script.setCodigo(codigoString);
            script.setDificultad(dificultad);
            script.setRespuesta(respuesta);
            scriptRepository.save(script);
        } catch (IOException e) {
            // Manejar la excepción si ocurre algún error al leer el archivo
            e.printStackTrace();
        }
    }

    public Optional<ScriptEntity> obtenerScript(Integer id) {
        return scriptRepository.findById(id);
    }

    public List<ScriptEntity> getRandomScriptForLevel(String dificultad){
        // Obtener los scripts aleatorios de la dificultad deseada
        List<ScriptEntity> scripts = scriptRepository.getRandomScriptForLevel(dificultad);

        // Si hay menos de 4 scripts, repetir aleatoriamente hasta tener 4 elementos
        if (scripts.size() < 4) {
            List<ScriptEntity> repeatedScripts = new ArrayList<>(scripts);
            Random random = new Random();
            while (repeatedScripts.size() < 4) {
                ScriptEntity randomScript = scripts.get(random.nextInt(scripts.size()));
                repeatedScripts.add(randomScript);
            }
            return repeatedScripts;
        }

        // Si hay 4 o más scripts, seleccionar 4 aleatoriamente de forma no repetida
        List<ScriptEntity> randoms = new ArrayList<>(scripts);
        Collections.shuffle(randoms);
        return randoms.subList(0, 4);
    }

}
