package tingeso3.scriptservice.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tingeso3.scriptservice.Entities.ScriptEntity;

import java.util.List;

@Repository
public interface ScriptRepository extends JpaRepository<ScriptEntity, String> {

    @Query("SELECT s FROM scripts s WHERE s.dificultad = :dificultad ORDER BY RANDOM() LIMIT 4")
    public List<ScriptEntity> getRandomScriptForLevel(@Param("dificultad") String dificultad);

}