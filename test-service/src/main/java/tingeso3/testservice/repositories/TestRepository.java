package tingeso3.testservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tingeso3.testservice.entities.TestEntity;

@Repository
public interface TestRepository extends JpaRepository<TestEntity, Integer> {
    @Query("select t from TestEntity t where t.id = :idTest")
    public TestEntity getTestEntityById(@Param("idTest") Integer idTest);
}
