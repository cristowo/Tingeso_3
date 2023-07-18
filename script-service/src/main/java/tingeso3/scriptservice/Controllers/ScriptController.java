package tingeso3.scriptservice.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tingeso3.scriptservice.Entities.ScriptEntity;
import tingeso3.scriptservice.Service.ScriptService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/scripts")
public class ScriptController {

    @Autowired
    ScriptService scriptService;

    @PostMapping
    public ResponseEntity<?> guardarScript(@RequestParam("codigo") MultipartFile codigo,
                              @RequestParam("dificultad") String dificultad,
                              @RequestParam("respuesta") String respuesta) {
        scriptService.guardarScript(codigo, dificultad, respuesta);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<ScriptEntity>> obtenerScript(@PathVariable("id") Integer id) {
        return ResponseEntity.ok(scriptService.obtenerScript(id));
    }

    @GetMapping("/random/{dificultad}")
    public ResponseEntity<List<ScriptEntity>> randomScripts(@PathVariable("dificultad") String dificultad){
        return ResponseEntity.ok(scriptService.getRandomScriptForLevel(dificultad));
    }

}
