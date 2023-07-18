package tingeso3.testservice.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;


@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "tests")
@Entity
public class TestEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ElementCollection
    private List<Integer> idScripts;
    private String dificultad;
    @ElementCollection
    private List<String> respuestas;
    private Double tiempoTotal;
    private Double puntaje;
}
