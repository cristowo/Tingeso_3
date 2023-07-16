package tingeso3.scriptservice.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import tingeso3.scriptservice.Entities.ScriptEntity;
import tingeso3.scriptservice.Repositories.ScriptRepository;

import java.io.IOException;
import java.util.List;

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

    public List<ScriptEntity> obtenerScripts() {
        return scriptRepository.findAll();
    }

    public List<ScriptEntity> getRandomScriptForLevel(String dificultad){
        PageRequest topFour = PageRequest.of(0, 4);
        List<ScriptEntity> scripts = scriptRepository.getRandomScriptForLevel("dificultad", topFour);
        return scripts;
    }

}
