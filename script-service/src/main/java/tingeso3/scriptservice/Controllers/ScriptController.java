package tingeso3.scriptservice.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tingeso3.scriptservice.Entities.ScriptEntity;
import tingeso3.scriptservice.Service.ScriptService;

import java.util.List;

@RestController
@RequestMapping("/scripts")
public class ScriptController {

    @Autowired
    ScriptService scriptService;

    @PostMapping
    public void guardarScript(@RequestBody ScriptEntity script) {
        scriptService.guardarScript(script);
    }

    @GetMapping
    public List<ScriptEntity> obtenerScripts() {
        return scriptService.obtenerScripts();
    }

    @GetMapping("/{dificultad}")
    public List<ScriptEntity> randomScripts(@PathVariable("dificultad") String dificultad){
        return scriptService.getRandomScriptForLevel(dificultad);
    }

}
