package tingeso3.scriptservice.Repositories;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tingeso3.scriptservice.Entities.ScriptEntity;

import java.util.List;

@Repository
public interface ScriptRepository extends JpaRepository<ScriptEntity, Integer> {
    
    @Query("SELECT s FROM ScriptEntity s WHERE s.dificultad = :dificultad")
    public List<ScriptEntity> getRandomScriptForLevel(@Param("dificultad") String dificultad);

    @Query("select s from ScriptEntity s where s.id = :id")
    public ScriptEntity getById(@Param("id") Integer id);

}
