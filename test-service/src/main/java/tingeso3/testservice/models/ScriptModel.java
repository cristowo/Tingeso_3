package tingeso3.testservice.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ScriptModel {
    Integer id;
    String dificultad;
    String codigo;
    String respuesta;
}
