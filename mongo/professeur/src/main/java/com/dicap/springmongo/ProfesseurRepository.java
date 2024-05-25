package com.dicap.springmongo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProfesseurRepository extends MongoRepository<Professeur, String> {

    @Query("{ $or: [ {'nom': { $regex: ?0, $options: 'i' } }, {'prenom': { $regex: ?0, $options: 'i' } }, {'sexe': { $regex: ?0, $options: 'i' } }, {'experience': { $regex: ?0, $options: 'i' } }, {'id': { $regex: ?0, $options: 'i' } }, {'matricule': { $regex: ?0, $options: 'i' } } ] }")
    List<Professeur> searchByAnyField(String searchString);
}
