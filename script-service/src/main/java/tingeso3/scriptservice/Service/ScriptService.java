package tingeso3.scriptservice.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tingeso3.scriptservice.Entities.ScriptEntity;
import tingeso3.scriptservice.Repositories.ScriptRepository;

import java.util.List;

@Service
public class ScriptService {
    @Autowired
    ScriptRepository scriptRepository;

    @Autowired
    public ScriptService(ScriptRepository scriptRepository) {
        this.scriptRepository = scriptRepository;
    }

    public void guardarScript(ScriptEntity script) {
        scriptRepository.save(script);
    }

    public List<ScriptEntity> obtenerScripts() {
        return scriptRepository.findAll();
    }

    public List<ScriptEntity> getRandomScriptForLevel(String dificultad){
        return scriptRepository.getRandomScriptForLevel(dificultad);
    }

}
