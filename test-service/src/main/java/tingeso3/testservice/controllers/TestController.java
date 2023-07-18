package tingeso3.testservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tingeso3.testservice.entities.TestEntity;
import tingeso3.testservice.models.ScriptModel;
import tingeso3.testservice.services.TestService;

import java.util.List;

@RestController
@RequestMapping("/tests")
public class TestController {
    @Autowired
    TestService testService;

    @PostMapping("/{dificultad}")
    public ResponseEntity<List<ScriptModel>> crearTest(@PathVariable("dificultad") String dificultad){
        return ResponseEntity.ok(testService.newTest(dificultad));
    }

    @PutMapping("/resultado/{id}/{list}/{time}")
    public ResponseEntity<List<String>> getPuntaje(@PathVariable("id") Integer idtest, @PathVariable("list") List<String> respuestas, @PathVariable("time") Double tiempo){
        return ResponseEntity.ok(testService.getPuntaje(idtest, respuestas, tiempo));
    }
    }
