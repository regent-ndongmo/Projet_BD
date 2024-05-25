package com.dicap.springmongo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EleveRepository extends MongoRepository<Eleve, String> {

    @Query("{ $or: [ {'nom': { $regex: ?0, $options: 'i' } }, {'prenom': { $regex: ?0, $options: 'i' } }, {'sexe': { $regex: ?0, $options: 'i' } }, {'dateNaiss': { $regex: ?0, $options: 'i' } }, {'id': { $regex: ?0, $options: 'i' } } ] }")
    List<Eleve> searchByAnyField(String searchString);
}
