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

    @PostMapping("/resultado/{scripts}/{resultados}/{time}")
    public ResponseEntity<List<String>> getPuntaje(@PathVariable("scripts") List<Integer> scripts, @PathVariable("resultados") List<String> resultados, @PathVariable("time") String tiempo){
        return ResponseEntity.ok(testService.getPuntaje(scripts, resultados, tiempo));
    }
}
