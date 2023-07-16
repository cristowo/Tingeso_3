package tingeso3.scriptservice.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tingeso3.scriptservice.Entities.ScriptEntity;
import tingeso3.scriptservice.Service.ScriptService;

import java.util.List;

@RestController
@RequestMapping("/scripts")
public class ScriptController {

    @Autowired
    ScriptService scriptService;

    @PostMapping
    public void guardarScript(@RequestParam("codigo") MultipartFile codigo,
                              @RequestParam("dificultad") String dificultad,
                              @RequestParam("respuesta") String respuesta) {
        scriptService.guardarScript(codigo, dificultad, respuesta);
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
