package com.dicap.semestre.controller;

import com.dicap.semestre.entity.Semestre;
import com.dicap.semestre.entity.Tache;
import com.dicap.semestre.repository.TacheRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/activite")
public class TacheController {

    public TacheController(TacheRepository tacheRepository) {
        this.tacheRepository = tacheRepository;
    }

    private final TacheRepository tacheRepository;


    @GetMapping
    public List<Tache> findAll() {
        return tacheRepository.findAll();
    }

    @GetMapping(path = "/{id}")
    public Tache findById(@PathVariable Long id) {
        Optional<Tache> optional = tacheRepository.findById(id);
        if (!optional.isPresent()) {
            throw new RuntimeException("semestre not found with id " + id);
        }
        return optional.get();
    }

    @PostMapping
    public Tache save(@RequestBody Tache semestre) {
        return tacheRepository.save(semestre);
    }

    @DeleteMapping(path = "/{id}")
    public String deleteById(@PathVariable Long id) {
        Optional<Tache> sequenceOptional = tacheRepository.findById(id);
        if (!sequenceOptional.isPresent()) {
            throw new RuntimeException("activity not found with id " + id);
        }

        tacheRepository.deleteById(id);
        return "activité supprimée";
    }

}
